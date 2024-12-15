import React, {ReactNode} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import VectorIcon from '../shared/vector-icon';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import { testImageHotel } from '../../constants';

const FeaturedEstablishments = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactNode;
}) => {
  const theme = useTheme() as CustomTheme;
  const nav = useNavigation();
  const establishments = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Hotel Inn',
      category: 'Hotel',
      rating: 4.7,
      distance: '1.8 km',
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      name: 'Extreme Gym',
      category: 'Fitness Gym',
      rating: 4.5,
      distance: '2.1 km',
    },
  ];

  const renderEstablishment = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('EstablishmentDetails');
      }}>
      <View style={[styles.card, {borderColor: theme.colors.lightGrey + '20'}]}>
        <Image
          source={{
            uri: testImageHotel,
          }}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.row}>
            <Text style={styles.category}>{item.category}</Text>
            <VectorIcon
              library="Ionicons"
              name="location-outline"
              size={16}
              color="#007AFF"
            />
            <Text style={styles.distance}>{item.distance}</Text>
          </View>
          <View style={styles.row}>
            <VectorIcon
              library="FontAwesome"
              name="star"
              size={14}
              color="#FFD700"
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {icon}
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              onPress={() => {
                nav.navigate('SearchResults');
              }}
              style={[styles.viewAll, {color: theme.colors.primary}]}>
              View All
            </Text>
            <VectorIcon
              library="MaterialIcons"
              name="keyboard-arrow-right"
              size={18}
              color={theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={establishments}
        renderItem={renderEstablishment}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '400',
  },
  card: {
    width: 230,

    // backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginRight: 6,
  },
  distance: {
    fontSize: 12,
    color: '#007AFF',
  },
  rating: {
    fontSize: 12,
    marginLeft: 4,
    color: '#666',
  },
});

export default FeaturedEstablishments;
