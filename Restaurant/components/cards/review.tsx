import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import VectorIcon from '../shared/vector-icon';
import { useTheme } from '@react-navigation/native';
import { CustomTheme } from '../../utils/theme';

const Review = ({reviewer, rating, date, reviewText, image}) => {
    const theme = useTheme() as CustomTheme
  return (
    <View style={styles.reviewItem}>
      {/* Header Section with Reviewer Info */}
      <View style={styles.header}>
        <Image source={{uri: image}} style={styles.profileImage} />
        <View style={{flex: 1, marginLeft: 12}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333'}}>
            {reviewer}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
            {[...Array(5)].map((_, index) => (
              <VectorIcon
                library="FontAwesome"
                key={index}
                name={index < rating ? 'star' : 'star-o'}
                size={12}
                color="#FFD700"
                style={{marginRight: 4}}
              />
            ))}
            <Text style={{fontSize: 14, color: '#666', marginLeft: 8}}>
              {rating.toFixed(1)}
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 12, color: theme.colors.lightGrey + '99'}}>{date}</Text>
      </View>

      {/* Review Text */}
      <Text
        style={{
          fontSize: 14,
          color: '#555',
          lineHeight: 20,
          marginTop: 8,
          marginBottom: 12,
        }}>
        {reviewText}
      </Text>

      {/* Optional Media Placeholder */}
      <View
        style={{
          height: 200,
          backgroundColor: '#f2f2f2',
          borderRadius: 8,
          marginBottom: 12,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 2,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 20,
  },
});

export default Review;
