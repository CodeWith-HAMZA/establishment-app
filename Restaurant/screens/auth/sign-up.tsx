import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SignUpForm from '../../components/forms/sign-up';

const SignUpScreen = props => {
  // console.log(props.route.params.role)
  const role: 'user' | 'owner' = props.route.params.role;
  return <SignUpForm role={role} />;
};

export default SignUpScreen;

const styles = StyleSheet.create({});
