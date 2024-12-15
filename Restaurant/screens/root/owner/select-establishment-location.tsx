import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SelectEstablishmentLocationScreen = () => {
  const handleCurrentLocation = () => {
    Alert.alert('Current Location', 'Fetching your current location...');
  };

  const handleContinue = () => {
    Alert.alert('Success', 'Location selected successfully.');
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Theron Branch Suite 920"
          placeholderTextColor="#999"
        />
        <Icon name="mic-outline" size={24} color="#000" style={styles.micIcon} />
      </View>

      {/* Use Current Location */}
      <TouchableOpacity onPress={handleCurrentLocation} style={styles.currentLocationContainer}>
        <Icon name="location-outline" size={20} color="#000" />
        <Text style={styles.currentLocationText}>Use my current location</Text>
      </TouchableOpacity>

      {/* Map Placeholder */}
      <View style={styles.mapPlaceholder}>
        <View style={styles.mapInner}>
          <Icon name="navigate-circle-outline" size={50} color="#fff" />
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '6%',
    paddingTop: '8%',
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  micIcon: {
    marginLeft: 8,
  },
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  currentLocationText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#f8d7da', // Light red background
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: '#dc3545', // Darker red for border
    borderWidth: 2,
    marginBottom: 20,
  },
  mapInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#dc3545', // Solid red circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectEstablishmentLocationScreen;
