import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ProgressBarProps {
  percentage: number;  
  barColor?: string;  
  backgroundColor?: string;  
  height?: number;  
  showLabel?: boolean;  
  containerStyle?: ViewStyle; 
  width?: number | string;
  labelStyle?: TextStyle;  
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  barColor = '#4CAF50',  
  backgroundColor = '#E0E0E0',  
  height = 10,
  showLabel = true,
  containerStyle,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {showLabel && (
        <Text style={[styles.label, labelStyle]}>{`${percentage}%`}</Text>
      )}
      <View
        style={[
          styles.barBackground,
          { backgroundColor, height },
        ]}
      >
        <View
          style={[
            styles.barFill,
            { backgroundColor: barColor, width: `${percentage}%`, height },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
    textAlign: 'right',
  },
  barBackground: {
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    borderRadius: 5,
  },
});

export default ProgressBar;
