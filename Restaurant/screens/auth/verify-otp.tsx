import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import GhostButton from '../../components/shared/buttons/ghost.button';
import {useVerifyOtp} from '../../services/api/auth/mutations/verify-otp';
import {useResendOtp} from '../../services/api/auth/mutations/resend-otp';
const VerifyCodeScreen = props => {
  const {mutate, data, isPending} = useVerifyOtp();
  const {mutate: resendMutate, isPending: isResending} = useResendOtp();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const {email, passwordReset} = props.route.params;
  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    console.log(props);
    if (value && index < 5) {
      const nextInput = `otpInput${index + 1}`;
      const nextRef = refs[nextInput];
      nextRef?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        const previousInput = `otpInput${index - 1}`;
        const prevRef = refs[previousInput];
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        prevRef?.focus();
      }
    }
  };

  let refs: {[key: string]: any} = {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Code</Text>

      <Text style={styles.subtitle}>
        Please enter the code we have just sent to your email
      </Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={value => handleOtpChange(value, index)}
            onKeyPress={event => handleKeyPress(event, index)}
            ref={ref => (refs[`otpInput${index}`] = ref)}
          />
        ))}
      </View>

      <Text style={styles.resendContainer}>
        Didn’t receive OTP?{' '}
        <TouchableOpacity
          onPress={() => {
            resendMutate({email, passwordReset});
          }}>
          <Text
            style={[
              styles.resendText,
              {opacity: isResending ? 0.2 : 1},
              {marginBottom: '-2%'},
            ]}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </Text>

      <GhostButton
        loading={isPending}
        onPress={() => {
          mutate({email, otp: otp.join(''), passwordReset});
          // console.log(otp)
        }}>
        Verify OTP
      </GhostButton>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    color: '#E74C3C',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',

    justifyContent: 'center',
    width: screenWidth * 0.7,
    gap: 10,
    marginBottom: 20,
  },
  otpInput: {
    width: screenWidth * 0.11,
    height: screenWidth * 0.14,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor: '#FFF',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  resendContainer: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  resendText: {
    color: '#E74C3C',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.7,
  },
  verifyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default VerifyCodeScreen;
