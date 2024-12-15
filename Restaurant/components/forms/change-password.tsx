import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TextBox from '../../components/shared/text-box';
import GhostButton from '../shared/buttons/ghost.button';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import {useChangePassword} from '../../services/api/auth/mutations/change-password';

interface ChangePasswordFormData {
  newPassword: string;
  confirmNewPassword: string;
}

const changePasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('New password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmNewPassword: Yup.string()
    .required('Please confirm your new password')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const ChangePasswordForm = (props) => {
  const theme = useTheme() as CustomTheme;
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
  });
  const {mutate, isPending} = useChangePassword();

  
  const onSubmit = (data: ChangePasswordFormData) => {
    // Alert.alert(
    //   'Password Changed',
    //   'Your password has been successfully updated',
    // );
    // console.log(props.email)
    mutate({newPassword: data.newPassword, email: props.email});
    console.log('Change Password Form Data:', data);
    // reset();
  };

  return (
    <View style={styles.container}>

      <Image
        resizeMode="contain"
        style={{alignSelf: 'center'}}
        source={require('./../../assets/images/logo.png')}
      />
      <Text style={styles.title}>Change Password</Text>
      <Text style={styles.subtitle}>Update your password securely</Text>

      <Controller
        control={control}
        name="newPassword"
        render={({field: {onChange, value}}) => (
          <>
            <TextBox
              icon="lock"
              placeholder="Your New Password"
              secureTextEntry
              onChangeText={onChange}
            />
            {errors.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword.message}</Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="confirmNewPassword"
        render={({field: {onChange, value}}) => (
          <>
            <TextBox
              icon="lock"
              placeholder="Confirm New Password"
              secureTextEntry
              onChangeText={onChange}
            />
            {errors.confirmNewPassword && (
              <Text style={styles.errorText}>
                {errors.confirmNewPassword.message}
              </Text>
            )}
          </>
        )}
      />

      {/* Submit Button */}
      <GhostButton loading={isPending} onPress={handleSubmit(onSubmit)}>
        Reset Password
      </GhostButton>

      {/* Cancel or Go Back */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={[styles.cancelText, {color: theme.colors.primary}]}>
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '12%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: '8%',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#777',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
  cancelText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
});

export default ChangePasswordForm;
