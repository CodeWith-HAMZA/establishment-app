import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import VectorIcon, { IconLibrary } from './vector-icon'; // Custom Icon Component
import { useTheme } from '@react-navigation/native';

interface RadioButtonProps {
  label: string;
  value: string;
  selected: boolean;
  onPress: (value: string) => void;
  iconLibrary?: IconLibrary;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selected,
  onPress,
  iconLibrary = 'Fontisto',
  iconName = 'radio-btn-active',
  iconColor,
  iconSize = 24,
  containerStyle,
  labelStyle,
}) => {
    const theme =useTheme();
   return (
    <TouchableOpacity
      style={[styles.radioContainer, containerStyle]}
      onPress={() => onPress(value)}
      activeOpacity={0.7}
    >
      <VectorIcon
        library={iconLibrary}
        name={selected ? iconName : 'radio-btn-passive'}
        size={iconSize}
        color={selected ? iconColor || theme.colors.primary : '#B1B9C5'}
      />
      <Text style={[styles.radioLabel, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default RadioButton;
