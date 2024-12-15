import {useMutation} from '@tanstack/react-query';
import {showMessage} from 'react-native-flash-message';
import {changePassword} from '../../../auth.service';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {NavigationActions} from 'react-navigation';

export const useChangePassword = () => {
  const nav = useNavigation();
  return useMutation<
    {message: string},
    Error,
    {newPassword: string; email: string}
  >({
    mutationFn: ({newPassword, email}) => changePassword(newPassword, email),
    onSuccess: data => {
      showMessage({
        message: 'Success',
        description: data.message,
        type: 'success',
        duration: 3000,
      });
      nav.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
           
            
            {name: 'SignIn'},
          ],
        }),
      );
    },

    onError: error => {
      showMessage({
        message: 'Failed to Change Password',
        description: error.message || 'Something went wrong. Please try again.',
        type: 'danger',
        duration: 3000,
      });
    },
  });
};
