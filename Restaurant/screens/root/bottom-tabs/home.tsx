import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomTheme} from '../../../utils/theme';
import FeaturedEstablishments from '../../../components/lists/featured-establishment-list';

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme() as CustomTheme;

  // Sample Data
  const featuredData = [
    {
      id: '1',
      name: 'Hotel Inn',
      category: 'Hotel',
      distance: '1.8 km',
      image: require('./../../../assets/test/pizza.png'),
    },
    {
      id: '2',
      name: 'Extreme Gym',
      category: 'Fitness Gym',
      distance: '1.2 km',
      image: require('./../../../assets/test/pizza.png'),
    },
  ];

  const nearbyData = [
    {
      id: '1',
      name: 'King Lee’s',
      category: 'Fast Food',
      distance: '2.6 km',
      rating: 4.7,
      image: require('./../../../assets/test/pizza.png'),
    },
    {
      id: '2',
      name: 'Hereford Grill',
      category: 'Chinese',
      distance: '2.8 km',
      rating: 4.4,
      image: require('./../../../assets/test/pizza.png'),
    },
  ];

  const renderFeaturedItem = ({item}) => (
    <TouchableOpacity style={styles.featuredCard}>
      <Image source={item.image} style={styles.featuredImage} />
      <View style={styles.featuredInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeCategory}>{item.category}</Text>
        <Text style={styles.placeDistance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderNearbyItem = ({item}) => (
    <TouchableOpacity style={styles.nearbyCard}>
      <Image source={item.image} style={styles.nearbyImage} />
      <View style={styles.nearbyInfo}>
        <Text style={styles.placeName}>{item.name}</Text>
        <Text style={styles.placeCategory}>{item.category}</Text>
        <View style={styles.nearbyMeta}>
          <Text style={styles.placeDistance}>{item.distance}</Text>
          <Text style={styles.placeRating}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <View>
          <Text style={styles.locationText}>Location</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.placeText, {color: theme.colors.lightGrey + '90'}]}>
              Theron Branch Suite
            </Text>
            <Icon style={{marginTop: 4}} name="chevron-down" size={20} color={theme.colors.lightGrey + '80'}  />
          </View>
        </View>
        <Image source={require('./../../../assets/icons/message.png')} />
      </View>
      <Text style={[styles.locationText, {marginLeft: '5%', marginTop: 6}]}>Places To Go</Text>

      {/* Categories */}
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}>
          
        {['Restaurants', 'Hotels', 'Toilets'].map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryTab,
              {
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 7,
              },
            ]}>
            {category === 'Restaurants' && (
              <Image
                source={require('./../../../assets/icons/folks.png')}
                style={{width: 30, height: 30}}
              />
            )}
            {category === 'Hotels' && (
              <ImageBackground
                style={{
                  backgroundColor: '#DDDDDD',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,

                  borderRadius: 100,
                }}>
                <Image
                  source={require('./../../../assets/icons/establishment.png')}
                  style={{width: 16, height: 16}}
                />
              </ImageBackground>
            )}
            {category === 'Toilets' && (
              <ImageBackground
                style={{
                  backgroundColor: '#DDDDDD',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,

                  borderRadius: 100,
                }}>
                <Image
                  source={require('./../../../assets/icons/toilet.png')}
                  style={{width: 16, height: 16}}
                />
              </ImageBackground>
            )}
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FeaturedEstablishments
        title="Featured Establishment"
        icon={
          <Image
            source={require('./../../../assets/icons/badge.png')}
            style={{width: 22, height: 22, marginRight: 6}}
          />
        }
      />

      <FeaturedEstablishments
        title="Nearby Restaurant"
        icon={
          <Image
            source={require('./../../../assets/icons/location-marker.png')}
            style={{width: 22, height: 22, marginRight: 6}}
          />
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  locationText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  placeText: {
    fontSize: 16,
    fontWeight: '400',
  },

  messageIcon: {
    marginLeft: 16,
  },
  categories: {
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  categoryTab: {
    // padding: 10,
    paddingVertical: 5,
    paddingHorizontal: 14,
    paddingLeft: 5,

    // paddingVertical: 12,
    marginVertical: 8,
    marginRight: 12,
    backgroundColor: '#fff',
    elevation: 5,

    shadowOffset: {
      width: 3,
      height: 20,
    },
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 14,
    color: '#007BFF',
  },
  featuredList: {
    paddingLeft: 16,
  },
  featuredCard: {
    marginRight: 16,
    width: 150,
  },
  featuredImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  featuredInfo: {
    marginTop: 8,
  },
  placeName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  placeCategory: {
    fontSize: 12,
    color: '#777',
  },
  placeDistance: {
    fontSize: 12,
    color: '#007BFF',
  },
  nearbyList: {
    paddingLeft: 16,
  },
  nearbyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  nearbyImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  nearbyInfo: {
    marginLeft: 12,
  },
  nearbyMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeRating: {
    fontSize: 12,
    marginLeft: 8,
    color: '#FFB400',
  },
});

export default HomeScreen;
