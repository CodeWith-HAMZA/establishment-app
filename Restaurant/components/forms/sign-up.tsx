import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Platform,
} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import {yupResolver} from '@hookform/resolvers/yup';
import TextBox from '../../components/shared/text-box';
import GhostButton from '../shared/buttons/ghost.button';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import {signUpValidationSchema} from './validations';
import {registerUser} from '../../services/auth.service';
import ImageCropPicker, {
  Image as ImageCrop,
} from 'react-native-image-crop-picker';
import {showMessage} from 'react-native-flash-message';
import {useMutation} from '@tanstack/react-query';
import {useRegisterUser} from '../../services/api/auth/mutations/register-user';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = ({role}: {role: 'user' | 'owner'}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for the chosen image
  const theme = useTheme() as CustomTheme;
  const navigation = useNavigation();
  const {mutate, data, isPending, isError} = useRegisterUser();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [image, setImage] = useState<ImageCrop | null>(null);

  const onSubmit = async (data: SignUpFormData) => {
    if (!image) {
      return showMessage({
        message: 'Please Select Your Profile Image',
        type: 'danger',
      });
    }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('role', role);

    formData.append('profile', {
      uri: image?.path,
      type: image?.mime,
      name: image?.filename,
    });

    // @ts-ignore
    mutate(formData);

    // navigation.navigate('VerifyOtp')
  };

  const chooseImage = async () => {
    ImageCropPicker.openPicker({
      // width: 300,
      // height: 400,
      cropping: true,
      mediaType: 'photo',
    }).then((image: ImageCrop) => {
      // console.log(image);
      console.log(image);
      setImage(image);
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled">
        {/* Image Picker */}
        <TouchableOpacity onPress={chooseImage}>
          {image ? (
            <Image
              resizeMode="cover"
              style={{
                alignSelf: 'center',
                width: 100,
                borderRadius: 50,
                height: 100,
              }}
              source={{uri: image.path}}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={{alignSelf: 'center', width: 100, height: 100}}
              source={
                require('./../../assets/images/image-placeholder.png') // Display the placeholder image
              }
            />
          )}
        </TouchableOpacity>

        <Text
          style={styles.title}
          onPress={() => {
            showMessage({
              message: 'Simple message',
              type: 'success',
            });
          }}>
          Create An Account
        </Text>
        <Text style={styles.subtitle}>Create a new account to get started</Text>

        {/* Name Input */}
        <Controller
          control={control}
          name="name"
          render={({field: {onChange, value}}) => (
            <>
              <TextBox
                icon="person"
                placeholder="Name"
                secureTextEntry={false}
                onChangeText={onChange}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name.message}</Text>
              )}
            </>
          )}
        />

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

        {/* Confirm Password Input */}
        <Controller
          control={control}
          name="confirmPassword"
          render={({field: {onChange, value}}) => (
            <>
              <TextBox
                icon="lock"
                placeholder="Confirm Password"
                secureTextEntry={true}
                onChangeText={onChange}
              />
              {errors.confirmPassword && (
                <Text style={styles.errorText}>
                  {errors.confirmPassword.message}
                </Text>
              )}
            </>
          )}
        />

        {/* Sign Up Button */}
        <GhostButton loading={isPending} onPress={handleSubmit(onSubmit)}>
          Sign Up
        </GhostButton>

        {/* Already Have an Account */}
        <Text style={[styles.signInTextContainer]}>
          Already have an account?{' '}
          <Text
            style={[styles.signInText, {color: theme.colors.primary}]}
            // @ts-ignore
            onPress={() => navigation.navigate('SignIn')}>
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
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
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
  signInTextContainer: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  signInText: {
    fontWeight: 'bold',
  },
});

export default SignUpForm;
