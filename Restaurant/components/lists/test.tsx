import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import VectorIcon, { IconLibrary } from './../../components/shared/vector-icon'; // Custom Icon Component

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
  iconLibrary = 'FontAwesome',
  iconName = 'check-circle',
  iconColor = '#007BFF',
  iconSize = 24,
  containerStyle,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.radioContainer, containerStyle]}
      onPress={() => onPress(value)}
      activeOpacity={0.7}
    >
      <VectorIcon
        library={iconLibrary}
        name={selected ? iconName : 'circle-o'}
        size={iconSize}
        color={selected ? iconColor : '#B1B9C5'}
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
