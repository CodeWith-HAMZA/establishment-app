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
import {validationSchema} from '../../components/forms/validations';
import GhostButton from '../shared/buttons/ghost.button';
import {CustomTheme} from '../../utils/theme';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useLoginUser} from '../../services/api/auth/mutations/login';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const theme = useTheme() as CustomTheme;

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignInFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {mutate, data, isPending} = useLoginUser();

  const onSubmit = ({email, password}: SignInFormData) => {
    // Alert.alert('Success', `Signed in with email: ${data.email}`);
    mutate({
      email,
      password,
    });
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Image
        resizeMode="contain"
        style={{alignSelf: 'center'}}
        source={require('./../../assets/images/logo.png')}
      />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Hi, Welcome back sign in to your account
      </Text>

      {/* Email Input */}
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

      {/* Password Input */}
      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value}}) => (
          <>
            <TextBox
              icon="lock"
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={onChange}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </>
        )}
      />
      <GhostButton loading={isPending} onPress={handleSubmit(onSubmit)}>
        Sign in
      </GhostButton>
       <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text
          style={[styles.forgotPasswordText, {color: theme.colors.primary}]}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <Text style={[styles.forgotPasswordText, {fontSize: 15}]}>
        Or Continue With
      </Text>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={require('./../../assets/icons/apple.png')} />
        <Image source={require('./../../assets/icons/google.png')} />
      </View>

      {/* Sign Up */}
      <View style={styles.signUpContainer}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate('SelectRole');
          }}>
          <Text style={[styles.signUpText, {color: theme.colors.primary}]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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

export default SignInForm;
