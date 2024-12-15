import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme';

type Props = TouchableOpacityProps & {
  otherStyle?: StyleSheetProperties;
  loading?: boolean;
};

const GhostButton = ({onPress, loading, children, otherStyle}: Props) => {
  const theme = useTheme() as CustomTheme;
   return (
    <TouchableOpacity
      style={{
        opacity: loading ? 0.4 : 1,
        ...styles.signInButton,
        backgroundColor: theme.colors.ghost,
        ...otherStyle,
      }}
      onPress={onPress}>
      <Text style={styles.signInButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default GhostButton;

const styles = StyleSheet.create({
  signInButton: {
    width: '100%',
    paddingVertical: '4%',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 6,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
