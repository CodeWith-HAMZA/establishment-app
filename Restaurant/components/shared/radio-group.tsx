import React from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, StyleSheet} from 'react-native';
import RadioButton from './radio-button';

interface RadioGroupProps {
  control: any;
  name: string;
  options: {label: string; value: string}[];
  label: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  control,
  name,
  options,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.groupLabel}>{label}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 16}}>
        <Controller
          control={control}
          name={name}
          render={({field: {value, onChange}}) =>
            options.map(option => (
              <RadioButton
                key={option.value}
                label={option.label}
                value={option.value}
                selected={value === option.value}
                onPress={onChange}
              />
            ))
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  groupLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default RadioGroup;
