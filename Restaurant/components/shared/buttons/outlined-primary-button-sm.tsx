import React from 'react';
import { StyleSheet, StyleSheetProperties, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../../../utils/theme';

type Props = TouchableOpacityProps & {
  otherStyle?: StyleSheetProperties;
  textStyles?: StyleSheetProperties;
  leftIcon?: React.ReactNode;
};
 
const PrimaryOutlinedButton = ({ onPress, children, otherStyle, leftIcon, textStyles }: Props) => {
  const theme = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      style={{
        ...styles.outlinedButton,
        borderColor: theme.colors.primary,
        ...otherStyle,
      }}
      onPress={onPress}
    >
      <View style={styles.contentContainer}>
        {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
        <Text style={[styles.outlinedButtonText, { color: theme.colors.primary }, textStyles]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {   PrimaryOutlinedButton };

const styles = StyleSheet.create({
  signInButton: {
    paddingVertical: '2%',
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  outlinedButton: {
    // width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '4%',

    borderRadius: 30,
    alignItems: 'center',
    // marginVertical: 10,
    borderWidth: 1,
  },
  outlinedButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Ensures text and icon are horizontally centered together
  },
  iconContainer: {
    marginRight: 8, // Adds spacing between the icon and the text
  },
});
