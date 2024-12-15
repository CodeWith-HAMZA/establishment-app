const nodemailer = require("nodemailer");
const { SMTP_MAIL_SENDER_EMAIL } = require("../constants/env");
const sendOTPByEmail = async (email, otp, subject = "Otp Verification") => {

  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: SMTP_MAIL_SENDER_EMAIL,
      pass: "stre lihc ewpo acnl",
    },
  });

  // Verify the transporter
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error verifying transporter:", error);
    } else {
      console.log("Transporter is ready to send emails");
    }
  });
   let mailOptions = {
    from: SMTP_MAIL_SENDER_EMAIL,
    to: email,  
    subject,
    text: `Your OTP  is ${otp}`,
    // html: '<b>Hello world?</b>' // ...
  };


  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
};

module.exports = { sendOTPByEmail };
