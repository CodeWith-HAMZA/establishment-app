const Otp = require('../models/otp.model');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { generateOtp, isOtpValid } = require('../utils');
const { sendOTPByEmail } = require('../configs/nodemailer');
const jwt = require('jsonwebtoken')

const generateJwtToken = async (id) => {
  const secretKey = process.env.JWT_SECRET;
  const token = await jwt.sign({ id }, secretKey, { expiresIn: '1w' });

  return token;
}

exports.loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // If user not found, return an error response
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your account before logging in.' });
    }

    // Generate a JWT token
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expiry
    });

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profile: user.profile,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

exports.registerUser = async (req, res) => {
  const { name, email, password, location, role } = req.body;
  console.log(req.profile);


  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (existingUser.isVerified) {
        return res.status(400).json({ message: 'User already verified. Please log in.' });
      } else {

        // -- resending the email if like in casee, user didn't verified its otp 
        return resend(existingUser.email, res);

        // return res.status(400).json({ message: 'User already registered. Please verify your account.' });
      }
    }

    // Hash password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    let profileImageUrl = '';

    if (req.file) {
      profileImageUrl = req.file.path;
    }
    // Create user with isVerified: false
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      profile: profileImageUrl,
      ...(role && { role }),
      location: {
        country: "PK",
        lat: 50,
        lng: 60,
      },
      isVerified: false,
    });

    await newUser.save();

    // Generate and save OTP
    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
    const newOtp = new Otp({ email, otp, otpExpiresAt });
    await newOtp.save();

    // Send OTP email
    await sendOTPByEmail(email, otp, 'Verify Your Mail For New Account');

    res.status(200).json({ message: 'User registered. OTP sent to email.', user: newUser, otpId: newOtp._id, profileImageUrl });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Find the user by username in the database
  const user = await User.findOne({ email });

  // If user not found, return an error response
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  let token = null;
  if (user?._id) {
    token = await generateJwtToken(user?._id);
  }

  return res.status(200).json({ user, token, message: 'Successfully Logged in' });
};


exports.verifyOtp = async (req, res) => {
  const { email, otp, passwordReset } = req.body;

  let verifyForResetPassword = !!passwordReset;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user && !verifyForResetPassword) {
      return res.status(404).json({ message: 'User not found. Please register again.' });
    }

    if (user.isVerified && !verifyForResetPassword) {
      return res.status(400).json({ message: 'User already verified. Please log in.' });
    }

    // Check if OTP exists
    const otpRecord = await Otp.findOne({ email });
    if (!otpRecord) {
      return res.status(404).json({ message: 'OTP not found or expired. Please resend OTP.' });
    }

    // Validate OTP
    if (otpRecord.otp !== otp || !isOtpValid(otpRecord.otpExpiresAt)) {
      return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    // Mark user as verified
    user.isVerified = true;
    await user.save();



    // Delete OTP record
    await Otp.deleteOne({ email });

    let token = null;
    if (user?._id) {
      token = await generateJwtToken(user?._id);
    }
    res.status(200).json({ user, message: 'User verified successfully.', token, passwordReset: !!passwordReset });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


exports.resendOtp = async (req, res) => {
  const { email, passwordReset } = req.body;

  resend(email, res, !!passwordReset)
};


async function resend(email, res, passwordReset) {
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user && !passwordReset) {
      return res.status(404).json({ message: 'User not found. Please register.' });
    }

    if (user.isVerified && !passwordReset) {
      return res.status(400).json({ message: 'User already verified. Please log in.' });
    }

    // Check if OTP already exists
    const existingOtp = await Otp.findOne({ email });

    // Generate a new OTP
    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes validity

    if (existingOtp) {
      // Update existing OTP record
      existingOtp.otp = otp;
      existingOtp.otpExpiresAt = otpExpiresAt;
      await existingOtp.save();
    } else {
      // Create new OTP record
      const newOtp = new Otp({ email, otp, otpExpiresAt });
      await newOtp.save();
    }

    // Send OTP email
    await sendOTPByEmail(email, otp);

    res.status(200).json({ message: 'OTP resent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }

}


exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "You don't have account, please register" });

    // Generate OTP
    const otpCode = generateOtp()
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 -mns
    const newOtp = new Otp({ email, otp: otpCode, otpExpiresAt });
    await newOtp.save();

    // Send OTP email
    await sendOTPByEmail(email, otpCode, 'Password Reset OTP');

    return res.status(200).json({ message: 'OTP sent to email', email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);


    // Update password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Password reset successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


exports.me = async (req, res) => {
  console.log(' hamza ', req.user)

  return res.json({ user: req.user, message: "Successfully Fetched User" })
}


exports.changePassword = async (req, res) => {
  const { newPassword, email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
 

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: 'Your Password Changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
