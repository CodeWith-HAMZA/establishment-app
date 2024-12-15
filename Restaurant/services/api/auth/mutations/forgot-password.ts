import {useMutation} from '@tanstack/react-query';
import {showMessage} from 'react-native-flash-message';
import {forgotPassword} from '../../../auth.service';
import {GeneralApiResponse} from '../../../types/api';
import {useNavigation} from '@react-navigation/native';

export const useForgotPassword = () => {
  const navigation = useNavigation();
  return useMutation<GeneralApiResponse, Error, {email: string}>({
    mutationFn: ({email}) => forgotPassword(email),
    onSuccess: data => {
      if (data?.email) {
         
        // @ts-ignore
        navigation.navigate('VerifyOtp', {
          email: data?.email,
          passwordReset: true,
        });
        showMessage({
          message: 'OTP sent successfully!',
          description: `An OTP has been sent to ${data?.email}. Please check your inbox.`,
          type: 'success',
          duration: 5000,
        });
      }
    },
    onError: error => {
      showMessage({
        message: 'Failed to send OTP',
        description: error.message || 'Something went wrong. Please try again.',
        type: 'danger',
        duration: 3000,
      });
    },
  });
};
