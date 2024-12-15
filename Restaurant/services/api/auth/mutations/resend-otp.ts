import {useMutation} from '@tanstack/react-query';
import {RegisterFormData, RegisterResponse} from '../../../types/api';
import {registerUser, resendOtp, verifyOtp} from '../../../auth.service';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

export const useResendOtp = () => {
  const nav = useNavigation();
  return useMutation<
    RegisterResponse,
    Error,
    {email: string; passwordReset: boolean}
  >({
    mutationFn: ({email, passwordReset}) => resendOtp(email, passwordReset),
    onSuccess: data => {
      console.log(data?.user);
      // @ts-ignore
      //   nav.navigate('TabsNavigation' );

      showMessage({
        description: 'Resent Otp to the mail',
        message: 'Successfully Resent the Otp',

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
