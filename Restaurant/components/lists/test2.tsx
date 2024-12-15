import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import RadioButton from './../shared/radio-button';
import { getAuthToken, storeAuthToken } from '../../utils/storage';

// Validation Schema
const validationSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
  userRole: yup.string().required('Role is required'),
});

const Test2 = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: '',
      userRole: '',
    },
    resolver: yupResolver(validationSchema),
  });

  // Submit Handler
  const onSubmit = (data) => {
    // Alert.alert('Form Data', JSON.stringify(data, null, 2));
    // storeAuthToken('my-tueoasoetuhoseuthken').then(_ => console.log(_))
        getAuthToken().then(_ => console.log(_))
console.log('etuhe')
    console.log('Submitted Data:', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Hook Form Radio Buttons</Text>

      {/* Gender Selection */}
      <Text style={styles.label}>Select Gender:</Text>
      <Controller
        control={control}
        name="gender"
        render={({ field: { onChange, value } }) => (
          <View>
            <RadioButton
              label="Male"
              value="male"
              selected={value === 'male'}
              onPress={onChange}
              // iconName='radio-btn-active'
              // iconLibrary='Fontisto'
            />
            <RadioButton
              label="Female"
              value="female"
              selected={value === 'female'}
              onPress={onChange}
            />
            <RadioButton
              label="Other"
              value="other"
              selected={value === 'other'}
              onPress={onChange}
            />
          </View>
        )}
      />
      {errors.gender && <Text style={styles.errorText}>{errors.gender.message}</Text>}

      {/* Role Selection */}
      <Text style={styles.label}>Select User Role:</Text>
      <Controller
        control={control}
        name="userRole"
        render={({ field: { onChange, value } }) => (
          <View>
            <RadioButton
              label="Admin"
              value="admin"
              selected={value === 'admin'}
              onPress={onChange}
            />
            <RadioButton
              label="User"
              value="user"
              selected={value === 'user'}
              onPress={onChange}
            />
            <RadioButton
              label="Guest"
              value="guest"
              selected={value === 'guest'}
              onPress={onChange}
            />
          </View>
        )}
      />
      {errors.userRole && <Text style={styles.errorText}>{errors.userRole.message}</Text>}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 16,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Test2;
