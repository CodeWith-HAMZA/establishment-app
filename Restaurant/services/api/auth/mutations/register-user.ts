import {useMutation} from '@tanstack/react-query';
import {RegisterFormData, RegisterResponse} from '../../../types/api';
import {registerUser} from '../../../auth.service';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';

export const useRegisterUser = () => {
  const nav = useNavigation();
  return useMutation<RegisterResponse, Error, RegisterFormData>({
    // @ts-ignore
    mutationFn: formData => registerUser(formData),
    onSuccess: data => {
      console.log(data?.user);
      // @ts-ignore
      nav.navigate('VerifyOtp', {email: data.user.email});

      showMessage({
        message: `Welcome ${data?.user.name}, Kindly check your mail ${data.user.email}`,
        type: 'success',
      });
    },
    onError: err => {
      console.log(err);
      showMessage({
        message: 'Something Went Wrong',
        type: 'danger',
      });
    },
  });
};
