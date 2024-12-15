import React from 'react';
import {
  StyleSheet,
  StyleSheetProperties,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../utils/theme';

type Props = TouchableOpacityProps & {
  otherStyle?: StyleSheetProperties;
  leftIcon?: React.ReactNode;
};

const PrimaryButton = ({
  onPress,
  children,
  otherStyle,
  leftIcon,
  loading,
}: Props) => {
  const theme = useTheme() as CustomTheme;

  return (
    <TouchableOpacity
      style={{
        ...{opacity: loading ? 0.2 : 1},
        ...styles.signInButton,
        backgroundColor: theme.colors.primary,
        ...otherStyle,
      }}
      onPress={onPress}>
      {leftIcon && <View style={[styles.leftIcon]}>{leftIcon}</View>}
      <View style={styles.textContainer}>
        <Text style={styles.signInButtonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  signInButton: {
    width: '100%',
    paddingVertical: '4%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  leftIcon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
