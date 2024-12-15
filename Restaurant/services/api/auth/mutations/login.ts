import {useMutation} from '@tanstack/react-query';
import {
  GeneralApiResponse,
  RegisterFormData,
  RegisterResponse,
} from '../../../types/api';
import {loginUser, registerUser} from '../../../auth.service';
import {showMessage} from 'react-native-flash-message';
import {useNavigation} from '@react-navigation/native';
import {storeAuthToken} from '../../../../utils/storage';

export const useLoginUser = () => {
  const nav = useNavigation();

  return useMutation<
    GeneralApiResponse,
    Error,
    {email: string; password: string}
  >({
    // @ts-ignore
    mutationFn: ({email, password}) => {
      //   console.log({credentials}, ' staoehutehutou');
      return loginUser(email, password);
    },
    onSuccess: async data => {
      console.log(data?.user);
      console.log('HAMZA ', data);

      if (data?.token) {
        await storeAuthToken(data?.token);
      } else {
        console.error('Auth-token didnt issued by the server');
        showMessage({
          type: 'danger',
          message: 'Something went wrong, please contact developer',
        });
        return;
      }
      if (data.user?.role === 'user') {
        // @ts-ignore
        nav.replace('TabsNavigation');
      } else if (data.user?.role === 'owner') {
        // @ts-ignore
        nav.replace('OwnerTabsNavigation');
      }

      showMessage({
        message: `Successfully Signed In`,
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
