import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {testImageHotel} from '../../../../constants';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../../../utils/theme';
import VectorIcon from '../../../../components/shared/vector-icon';
import ImageCropPicker from 'react-native-image-crop-picker';

const OwnerDashboardScreen = () => {
  const theme = useTheme() as CustomTheme;
  const [selectedImage, setSelectedImage] = useState(null);
  const nav = useNavigation()
  const handleEditProfile = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        // console.log(image);
        setSelectedImage(image);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{uri: testImageHotel}} // Replace with your image URL
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.welcomeText}>
          👋 Welcome Back, <Text style={styles.username}>Jake!</Text>
        </Text>

        <View style={styles.profileContainer}>
          <View
            style={{borderColor: '#fff', borderWidth: 5, borderRadius: 100}}>
            <Image
              source={{uri: testImageHotel}} // Replace with profile image URL
              style={[styles.profileImage, {borderColor: theme.colors.primary}]}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              handleEditProfile();
            }}
            style={[styles.editIcon, {backgroundColor: theme.colors.primary}]}>
            <VectorIcon library="Feather" name="edit" size={18} color="white" />{' '}
          </TouchableOpacity>
        </View>
      </View>

      {/* Hotel Info */}
      <View style={styles.hotelInfoContainer}>
        <Text style={styles.hotelName}>Queenstown Hotel</Text>
        <View style={styles.ratingRow}>
          <Text style={styles.rating}>4.0</Text>
          <VectorIcon
            library="FontAwesome"
            name="star"
            size={16}
            color="#FFC107"
          />
          <VectorIcon
            library="FontAwesome"
            name="star"
            size={16}
            color="#FFC107"
          />
          <VectorIcon
            library="FontAwesome"
            name="star"
            size={16}
            color="#FFC107"
          />
          <VectorIcon
            library="FontAwesome"
            name="star"
            size={16}
            color="#FFC107"
          />
          <VectorIcon
            library="FontAwesome"
            name="star-half-empty"
            size={16}
            color="#FFC107"
          />
        </View>
        <Text style={styles.reviewText}>Based on 2.5k reviews</Text>
      </View>

      {/* Statistics */}
      <View style={styles.statisticsContainer}>
        <View style={[styles.statBox, {flexDirection: 'row', gap: 8}]}>
          <Image
            source={require('./../../../../assets/icons/like-star.png')}
            style={{}}
          />
          <View>
            <Text style={[styles.statNumber, {color: theme.colors.primary}]}>
              2.5k
            </Text>
            <Text style={styles.statLabel}>Ratings</Text>
          </View>
        </View>
        <View style={[styles.statBox, {flexDirection: 'row', gap: 8}]}>
          <Image
            source={require('./../../../../assets/icons/message-2.png')}
            style={{}}
          />
          <View>
            <Text style={[styles.statNumber, {color: theme.colors.primary}]}>
              1.7k
            </Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>
      </View>

      {/* Recent Reviews */}
      <View style={styles.recentReviewsContainer}>
        <View style={styles.reviewHeader}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../../../assets/icons/rating-star.png')}
            />
            <Text style={styles.sectionTitle}> Recent Reviews</Text>
          </View>
          <TouchableOpacity onPress={() => nav.navigate('OwnerReviews')}>
            <Text style={[styles.viewAllText, {color: theme.colors.primary}]}>
              View All{' '}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Review Card 1 */}
        <View style={styles.reviewCard}>
          <Image source={{uri: testImageHotel}} style={styles.reviewerImage} />
          <View style={styles.reviewContent}>
            <View style={styles.reviewTitleRow}>
              <Text style={styles.reviewerName}>Emily Grey</Text>
              <Text style={styles.reviewTime}>4 hours ago</Text>
            </View>
            <View style={styles.ratingRow}>
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />

              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />

              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star-o"
                size={16}
                color="#FFC107"
              />
            </View>
            <Text style={styles.reviewText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
          </View>
        </View>

        {/* Review Card 2 */}
        <View style={styles.reviewCard}>
          <Image
            source={{uri: testImageHotel}} // Replace with profile image URL
            style={styles.reviewerImage}
          />
          <View style={styles.reviewContent}>
            <View style={styles.reviewTitleRow}>
              <Text style={styles.reviewerName}>Copper Grey</Text>
              <Text style={styles.reviewTime}>5 hours ago</Text>
            </View>
            <View style={styles.ratingRow}>
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star"
                size={16}
                color="#FFC107"
              />
              <VectorIcon
                library="FontAwesome"
                name="star-half-empty"
                size={16}
                color="#FFC107"
              />
            </View>
            <Text style={styles.reviewText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'relative',
    height: 200,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  welcomeText: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 16,
    color: '#FFFFFF',
  },
  username: {
    fontWeight: 'bold',
  },
  profileContainer: {
    position: 'absolute',
    bottom: '-18%',
    left: '36%',
    zIndex: 2,
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FF4D4D',
    borderRadius: 15,
    padding: 4,
  },
  hotelInfoContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  hotelName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 6,
  },
  reviewText: {
    fontSize: 12,
    color: '#888',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  recentReviewsContainer: {
    paddingHorizontal: 16,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#FF4D4D',
  },
  reviewCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 10,
  },
  reviewerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  reviewerName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default OwnerDashboardScreen;
