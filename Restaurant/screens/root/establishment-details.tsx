import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VectorIcon from '../../components/shared/vector-icon';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import {useNavigation} from '@react-navigation/native';
import {ImageSlider} from 'react-native-image-slider-banner';
import {Header} from '@react-navigation/elements';

const facilities = ['Building', 'Walking', 'Bathroom', 'Ramps', 'Bar', 'Screen Readers', 'Wheelchairs'];

export default function EstablishmentDetailsScreen() {
  const [images, setImages] = useState([
    'https://source.unsplash.com/1024x768/?tree', // Network image
    'https://source.unsplash.com/1024x768/?tree', // Network image
    'https://source.unsplash.com/1024x768/?tree', // Network image
    'https://source.unsplash.com/1024x768/?tree', // Network image

    'https://source.unsplash.com/1024x768/?tree', // Network image

    // require('./assets/images/girl.jpg'),          // Local image
  ]);

  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          zIndex: 80,
          position: 'relative',
          top: '12%',
          paddingHorizontal: 12,
          paddingVertical: 4,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -74,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <VectorIcon color="#fff" library="Ionicons" name="arrow-back" />
        </TouchableOpacity>

        <Image
          source={require('./../../assets/icons/message.png')}
          // style={{marginRight: '14%'}}
        />
        {/* <Text>Shaddu</Text> */}
      </View>
      <ImageSlider
        inActiveIndicatorStyle={{opacity: 0.4}}
        activeIndicatorStyle={{
          backgroundColor: '#fff',
          width: 10,
          height: 10,
        }}
        caroselImageContainerStyle={{
          // backgroundColor: 'red',
          padding: 0,
          margin: 0,
          // height: 240,
          height: '80%',
          // top: '-1%',
        }}
        // indicatorContainerStyle={{top: '5%'}}
        data={[
          {
            img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
          },
          {
            img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
          },
          {
            img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
          },
        ]}
        timer={4000}
        autoPlay={true}
        onItemChanged={item => console.log('item', item)}
        // closeIconColor="#fff"
      />
      <ScrollView style={styles.container}>
        {/* Hotel Info Section */}
        <View style={styles.hotelInfo}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 3,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', gap: 4, width: '50%'}}>
              <VectorIcon
                name="verified"
                library="MaterialIcons"
                size={20}
                color="#4CAF50"
              />
              <Text style={styles.hotelName}>Hotel Inn</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Reviews');
              }}
              style={styles.ratingRow}>
              <Text style={styles.ratingText}>⭐ 4.7</Text>
              <Text
                style={[
                  styles.reviewCount,
                  {textDecorationLine: 'underline', fontSize: 12},
                ]}>
                (133 Reviews)
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.hotelAddress}>
            70 Washington Square South, New York, NY 10012, United States
          </Text>

          <Text style={styles.hotelAddress}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </Text>

          <View style={[styles.facilitiesSection, {marginBottom: '14%'}]}>
            <Text style={styles.sectionTitle}>Available Facilities</Text>
            <View style={styles.facilityList}>
              <FlatList
                numColumns={2}
                data={facilities}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <View
                    key={index}
                    style={[
                      {
                        display: 'flex',
                        flexDirection: 'row',
                        width: 180,
                        gap: 12,
                        alignItems: 'center',
                        marginVertical: 5,
                      },
                    ]}>
                    <Image
                      source={require('./../../assets/icons/checked.png')}
                      style={{width: 20, height: 20}}
                    />
                    <Text style={styles.facilityText}>{item}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <PrimaryButton
            onPress={() => {
              navigation.navigate('Reviews');
            }}>
            Contact Now
          </PrimaryButton>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: '-30%',
    // marginTop: '-20%',
    backgroundColor: '#fff',
  },
  carousel: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  hotelInfo: {
    flexDirection: 'column',

    padding: 16,
    paddingTop: 0,
    // paddingTop: 0,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  hotelAddress: {
    fontSize: 14,
    color: 'grey',
    marginVertical: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  hotelDescription: {
    fontSize: 14,
    color: '#333',
    marginTop: 16,
    lineHeight: 20,
  },
  facilitiesSection: {
    // paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  facilityList: {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 16,
  },
  facilityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 4,
    borderWidth: 1,
    borderColor: '#FF6B6B',
  },
  facilityText: {
    fontSize: 15.4,
    // color: '#FF6B6B',
    color: 'black',
  },
  contactButton: {
    backgroundColor: '#C70039',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
