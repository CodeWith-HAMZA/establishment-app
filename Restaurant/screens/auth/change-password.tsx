import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ChangePasswordForm from '../../components/forms/change-password';

const ChangePasswordScreen = (props) => {
// console.log(props.route.params.email)
  return <ChangePasswordForm email={props.route.params.email} />;
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
