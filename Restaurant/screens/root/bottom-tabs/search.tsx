import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TextBox from '../../../components/shared/text-box';
import GhostButton from '../../../components/shared/buttons/ghost.button';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation()
  const handleCurrentLocation = () => {
    Alert.alert('Current Location', 'Fetching your current location...');
  };

  const handleContinue = () => {
    Alert.alert('Success', 'Location selected successfully.');
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={{ 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10, 
        paddingHorizontal: '6%', 
        backgroundColor: 'white',  // Set background color to match the container background
        // shadowColor: 'red',  // Set shadow color
        shadowOffset: {
        
          height: 2,  // Control the shadow offset for bottom side elevation
        },
        shadowOpacity: 0.25,  // Set shadow opacity
        shadowRadius: 8,  // Set shadow radius
        // elevation: 8,  // Add Andro
        }}> 
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text onPress={() => {
            navigation.navigate('FilterPlaces')
          }} style={{ fontWeight: '600', fontSize: 18, flex: 1, textAlign: 'center' }}>Search</Text>
          <Image  source={require('./../../../assets/icons/message.png')} style={{ marginLeft: 'auto' }} />
        </View>

  <View style={styles.searchContainer}>
    <TextBox 
      icon="search" 
      onChangeText={() => {
        // get typed value
      }} 
      library='Octicons' 
      rightIconLibrary='FontAwesome' 
      rightIconBtn='microphone' 
      placeholder='Theosis Branch #987' 
    />
    <TouchableOpacity onPress={() => navigation.navigate('FilterPlaces')}>

    <Image style={{ marginTop: '2%', marginLeft: '-2%' }} source={require('./../../../assets/icons/filters.png')} /> 
    </TouchableOpacity>
  </View>
</View>
 
      <View style={styles.mapPlaceholder}>
          <Image style={{position: 'absolute', top: '80%', left: '80%'}} source={require('./../../../assets/icons/current-location.png')} />
        <View style={styles.mapInner}>
          <Icon name="navigate-circle-outline" size={50} color="#fff" />
        </View>
      </View>

      {/* Continue Button */}
     
     {/* <GhostButton>Continue</GhostButton> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

    paddingTop: '8%',
    backgroundColor: '#fff',
  },
  searchInputContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center', 
    borderRadius: 8,
    // paddingHorizontal: 14,
    paddingVertical: '1.8%', 
  },
  
  searchContainer: { 
    flexDirection: 'row',
     
    alignItems: 'center', 
    borderRadius: 8, 
    marginBottom: 10,
  },
   
  micIcon: {
    // marginLeft: 8,
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
    position: 'relative',
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

export default SearchScreen;
