import React from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import { SliderOnChangeCallback } from '@miblanchard/react-native-slider/lib/types';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../../utils/theme';

interface SliderProps {
  value: number;
  onValueChange: SliderOnChangeCallback;
  containerStyle?: StyleProp<ViewStyle>;
}

const ReusableSlider: React.FC<SliderProps> = ({ value, onValueChange, containerStyle }) => {
    const theme = useTheme() as CustomTheme
  return (
    <View style={[styles.container, containerStyle]}>
      <Slider
        value={value}
        onValueChange={onValueChange}
        thumbTintColor={theme.colors.primary}
        thumbStyle={{borderWidth: 3.4, borderColor: '#fff'}}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.lightGrey+'20'}
        minimumValue={2}
        maximumValue={100}
       />
      {/* <Text>Value: {value}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default ReusableSlider;