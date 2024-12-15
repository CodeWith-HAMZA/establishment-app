import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import TextBox from '../../components/shared/text-box';
import {forgotPasswordSchema} from '../../components/forms/validations';
import GhostButton from '../shared/buttons/ghost.button';
import {CustomTheme} from '../../utils/theme';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useLoginUser} from '../../services/api/auth/mutations/login';
import {Header} from '@react-navigation/elements';
import {forgotPassword} from '../../services/auth.service';
import {useForgotPassword} from '../../services/api/auth/mutations/forgot-password';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPasswordForm = () => {
  const theme = useTheme() as CustomTheme;
  const {mutate, data, isPending} = useForgotPassword();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = ({email}: ForgotPasswordFormData) => {
    mutate({email});
    //@ts-ignore
  };

  return (
    <>
      <Header
        title="Forgot Password"
        headerTitleAlign="center"
        // headerStyle={{left: '-8%'}}
        back={{title: 'Back', href: 'back'}}
        headerShadowVisible={false}
      />
      <Text
        style={{
          color: theme.colors.lightGrey + '90',
          marginTop: 2,
          paddingHorizontal: 16,
        }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit.
      </Text>
      <View style={styles.container}>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, value}}) => (
            <>
              <TextBox
                icon="mail"
                placeholder="Email"
                secureTextEntry={false}
                onChangeText={onChange}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </>
          )}
        />

        <GhostButton loading={isPending} onPress={handleSubmit(onSubmit)}>
          Continue
        </GhostButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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

  forgotPasswordText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 14,
  },
  signUpText: {
    color: '#d50000',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordForm;
