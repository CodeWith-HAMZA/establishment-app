import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import VectorIcon from '../shared/vector-icon';
import TextBox from '../shared/text-box';
import { useNavigation, useTheme } from '@react-navigation/native';
import { CustomTheme } from '../../utils/theme';

const establishments = [
  {
    id: '1',
    name: 'Queenstown Hotel',
    address: '1024 Road, Loughton, United States',
    distance: '1.8 km',
    rating: 4.7,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '2',
    name: 'Silver Seashore Resort',
    address: '1024 Road, Loughton, United States',
    distance: '8.8 km',
    rating: 4.7,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '3',
    name: 'Stardust Hotel',
    address: '1024 Road, Loughton, United States',
    distance: '1.2 km',
    rating: 4.7,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '4',
    name: 'Stracnch French Hotel',
    address: '1024 Road, Washington, United States',
    distance: '4.5 km',
    rating: 4.7,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '5',
    name: 'Seaside Lodge',
    address: '1024 Road, Malibu, United States',
    distance: '3.2 km',
    rating: 4.5,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '6',
    name: 'Mountain View Inn',
    address: '1024 Road, Denver, United States',
    distance: '6.7 km',
    rating: 4.8,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '7',
    name: 'Sunset Oasis Resort',
    address: '1024 Road, Hawaii, United States',
    distance: '12.1 km',
    rating: 4.6,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '8',
    name: 'Riverside Retreat',
    address: '1024 Road, Portland, United States',
    distance: '5.5 km',
    rating: 4.4,
    image: 'https://via.placeholder.com/80',
  },
];

const EstablishmentList = ({ items = []}) => {
  const [search, setSearch] = useState('');
  const [filteredEstablishments, setFilteredEstablishments] = useState(establishments);
  const theme = useTheme() as CustomTheme
  const navigation = useNavigation();
  // Filter establishments based on search input
  const handleSearch = (text: string) => {
    setSearch(text);
    if (text.trim() === '') {
      setFilteredEstablishments(establishments);
    } else {
      setFilteredEstablishments(
        establishments.filter((item) =>
          item.name.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };
  

  const renderItem = ({ item }: { item: typeof establishments[0]}) => (
    <TouchableOpacity onPress={() => {
      navigation.navigate('EstablishmentLocation')
      console.log('steuhteh')
      

    }}>
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address}</Text>
        <View style={styles.row}>
          {/* <VectorIcon name="location-pin" library='MaterialIcons' size={18} color="#D9534F" /> */}
          <Image source={require('./../../assets/icons/arrow.png')} width={22} height={22} />
          <Text style={styles.distance}>{item.distance}</Text>
        </View>
       
      </View>
      <View style={{flexDirection: 'column'}}>

      <TouchableOpacity onPress={() => {
        navigation.navigate('EstablishmentDetails')
      }} style={styles.iconContainer}>
        <View style={{backgroundColor: '#fff', borderWidth: 1, borderRadius: 50, padding: 4, paddingHorizontal: 6, borderColor: theme.colors.primary}}>

        <VectorIcon name="phone" library='FontAwesome' size={18} color="#D9534F" />
        </View>
      </TouchableOpacity>
      <View style={styles.row}>
          <VectorIcon name="star" library='FontAwesome' size={16} color="#FFC107" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
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
      <Text style={styles.header}>Recent Results</Text>

      {/* Search Bar */}
    
      {/* FlatList */}
      <FlatList
        data={filteredEstablishments}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default EstablishmentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  searchBox: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 14,
    backgroundColor: '#F9F9F9',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // elevation: 1,
    borderWidth:1,
    borderColor: '#0002'
  },
  image: {
    width: 76,
    height: 76,
    borderRadius: 8,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  address: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  distance: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
