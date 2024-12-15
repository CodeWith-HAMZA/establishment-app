import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import VectorIcon from '../../components/shared/vector-icon';
import PrimaryButton from '../../components/shared/buttons/primary.button';

export default function WriteReview() {
  const [rating, setRating] = useState(0);

  const handleStarPress = index => {
    setRating(index + 1);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{uri: 'https://via.placeholder.com/80'}} // Replace with actual image
          style={styles.hotelImage}
        />
        <View style={styles.hotelInfo}>
          <Text style={styles.hotelName}>Hotel Inn</Text>
          <Text style={styles.ratingText}>
            ⭐ 4.0 <Text style={styles.reviewCount}>(33 Reviews)</Text>
          </Text>
        </View>
      </View>

      {/* Rating Section */}
      <View style={styles.ratingSection}>
        <Text style={styles.sectionTitle}>Add Rating</Text>
        <View style={styles.stars}>
          <View style={[styles.stars, {justifyContent: 'center', alignItems: 'center'}]}>
            <Image
              source={{uri: 'https://via.placeholder.com/80'}} // Replace with actual image
              style={{width: 34, height:34, borderRadius: 50, marginRight: 8 }}
            />

            {[...Array(5)].map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleStarPress(index)}>
                <VectorIcon
                  library="FontAwesome"
                  name={index < rating ? 'star' : 'star-o'}
                  size={26}
                  color="#FFD700"
                  containerStyle={{marginRight: 12}}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Media Upload Section */}
      <View style={styles.mediaSection}>
        <Text style={styles.sectionTitle}>Add Media</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <VectorIcon
            library="FontAwesome"
            name="cloud-upload"
            size={36}
            color="#aaa"
          />
          <Text style={styles.uploadText}>Add photos you want to upload</Text>
        </TouchableOpacity>
      </View>

      {/* Write Review Section */}
      <View style={styles.reviewSection}>
        <Text style={styles.sectionTitle}>Write a Review</Text>
        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.textBox}
            lineBreakStrategyIOS="push-out"
            placeholder="Write about your experience with our hotel"
            placeholderTextColor="#aaa"
            multiline
            numberOfLines={8}
          />
          <TouchableOpacity style={styles.micButton}>
            <VectorIcon
              library="FontAwesome"
              name="microphone"
              size={24}
              color="#0008"
            />
          </TouchableOpacity>
        </View>
      </View>
      <PrimaryButton>Submit Review</PrimaryButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  hotelImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  hotelInfo: {
    marginLeft: 16,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  reviewCount: {
    fontSize: 12,
    color: '#aaa',
  },
  ratingSection: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
  },
  mediaSection: {
    marginVertical: 16,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: 8,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 8,
  },
  reviewSection: {
    marginVertical: 16,
  },
  textBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  textBox: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  micButton: {
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: '#C70039',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
