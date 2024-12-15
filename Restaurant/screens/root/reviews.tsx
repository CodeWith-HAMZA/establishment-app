import {Header} from '@react-navigation/elements';
import {useNavigation, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {CustomTheme} from '../../utils/theme';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import Review from '../../components/cards/review';

const reviews = [
  {
    id: '1',
    name: 'Copper Grey',
    rating: 4.0,
    timeAgo: '14 days ago',
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URLs
  },
  {
    id: '2',
    name: 'Emiley Grey',
    rating: 5.0,
    timeAgo: '14 days ago',
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URLs
  },
  {
    id: '3',
    name: 'Cole Ellis',
    rating: 4.0,
    timeAgo: '14 days ago',
    comment:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    avatar: 'https://via.placeholder.com/50', // Replace with actual avatar URLs
  },
];

export default function Reviews() {
  const nav = useNavigation();
  const theme = useTheme() as CustomTheme;
  const renderReview = ({item}) => (
    <>
      <Review
        reviewer="Copper Grey"
        rating={4}
        date="14 days ago"
        reviewText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."
        image="https://via.placeholder.com/40"
      />
    </>
  );

  return (
    <>
      <Header
        back={{title: 'Back', href: 'Search'}}
        headerBackgroundContainerStyle={{
          borderBottomWidth: 0.8,
          borderColor: theme.colors.ghost + '10',
        }}
        title="Reviews"
        headerTitleAlign="center"
        headerRight={() => {
          return (
            <Image
              source={require('./../../assets/icons/message.png')}
              style={{marginRight: '14%'}}
            />
          );
        }}
      />

      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => {
            return (
              <View style={styles.header}>
                <Image
                  source={{uri: 'https://via.placeholder.com/100'}}
                  style={styles.hotelImage}
                />
                <Text style={styles.hotelName}>Hotel Inn</Text>
                <Text style={styles.ratingText}>
                  4.0{' '}
                  <Text style={styles.totalReviews}>Based on 223 reviews</Text>
                </Text>
                <View style={styles.ratingBreakdown}>
                  {['Excellent', 'Good', 'Average', 'Below', 'Poor'].map(
                    (label, index) => (
                      <View style={styles.ratingRow} key={index}>
                        <Text
                          style={[
                            styles.ratingLabel,
                            {color: theme.colors.lightGrey},
                          ]}>
                          {label}
                        </Text>
                        <View style={styles.ratingBar}>
                          <View
                            style={[
                              styles.ratingFill,
                              label === 'Good' && {backgroundColor: '#A5D631'},
                              label === 'Excellent' && {
                                backgroundColor: '#4AA54A',
                              },
                              label === 'Average' && {
                                backgroundColor: '#F7D732',
                              },
                              label === 'Below' && {backgroundColor: '#F7AB32'},
                              label === 'Poor' && {backgroundColor: '#EF3A10'},

                              {width: `${(5 - index) * 20}%`},
                            ]}
                          />
                        </View>
                      </View>
                    ),
                  )}
                </View>
              </View>
            );
          }}
          data={reviews}
          renderItem={renderReview}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.reviewsList}
        />

        <View style={{marginVertical: 8}}>
          <PrimaryButton
            onPress={() => {
              nav.navigate('PostReview');
            }}
            style={{}}>
            Write A Review
          </PrimaryButton>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: '3%',
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  hotelImage: {
    width: 74,
    height: 74,
    borderRadius: 50,
    marginBottom: 8,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
  },
  totalReviews: {
    fontSize: 14,
    color: '#666',
  },
  ratingBreakdown: {
    width: '100%',
    marginTop: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingLabel: {
    flex: 1,
    fontSize: 14,
    color: '#436F86',
  },
  ratingBar: {
    flex: 3,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  ratingFill: {
    height: '100%',
    borderRadius: 50,
    // backgroundColor: '#4CAF50',
  },
  reviewsList: {
    marginBottom: 16,
  },
  reviewContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  reviewContent: {
    flex: 1,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
  },
  timeAgo: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  comment: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#FF5733',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
