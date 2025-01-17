import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import VectorIcon from '../../components/shared/vector-icon';
import { useNavigation } from '@react-navigation/native';
 const CustomScreen = () => {
  const nav = useNavigation()
  return (
    <View style={styles.container}>
      {/* Center Circle */}
      {/* <View style={styles.centerCircle} /> */}
       {/* Bottom Buttons */}  
      <Text style={{color:'gray'}} onPress={() => {
        nav.navigate('Demo')
      }}> Map Container</Text>
      <View style={styles.buttonContainer}>
        {/* Button 1: Compass */}
        <TouchableOpacity style={styles.button}>
          <VectorIcon library='MaterialIcons' name="explore" size={24} color="white" />
        </TouchableOpacity>

        {/* Button 2: Location */}
        <TouchableOpacity style={styles.button}>
          <VectorIcon library='MaterialIcons' name="my-location" size={24} color="white" />
        </TouchableOpacity>

        {/* Button 3: Search */}
        <TouchableOpacity style={styles.button}>
          <VectorIcon library='MaterialIcons' name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00BCD4', // Blue circle
    position: 'absolute',
    top: '40%', // Center it vertically
  },
  buttonContainer: {
    flexDirection: 'column',

    justifyContent: 'space-around',
    gap: 16,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20, // Bottom padding
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1E88E5', // Blue background for buttons
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomScreen;
