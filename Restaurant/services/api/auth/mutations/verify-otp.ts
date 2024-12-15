import {useMutation} from '@tanstack/react-query';
import {RegisterFormData, RegisterResponse} from '../../../types/api';
import {registerUser, verifyOtp} from '../../../auth.service';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import {storeAuthToken} from '../../../../utils/storage';

export const useVerifyOtp = () => {
  const nav = useNavigation();
  return useMutation<
    RegisterResponse,
    Error,
    {email: string; otp: string; passwordReset: boolean}
  >({
    mutationFn: ({email, otp, passwordReset}) =>
      verifyOtp(email, otp, passwordReset),
    onSuccess: async data => {
      if (data?.passwordReset) {
        nav.navigate('ChangePassword', {email: data.user.email});
        showMessage({
          message: 'Success You are Verified!',
          description: `Successfully Verified Your Identity To Reset Password`,
          type: 'success',
          duration: 5000,
        });
        return;
      }
      console.log(data);
      await storeAuthToken(data?.token);
      // @ts-ignore
      nav.navigate('TabsNavigation');

      showMessage({
        message: `Successfully Verified Your Email`,
        type: 'success',
      });
    },
    onError: err => {
      console.log(err);
      showMessage({
        message: err.message,
        type: 'danger',
      });
    },
  });
};
