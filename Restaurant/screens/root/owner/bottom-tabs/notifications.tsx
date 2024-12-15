import {Header} from '@react-navigation/elements';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const OwnerNotificationsScreen = () => {
  return (
    <>
      <Header
        title="Notifications"
        headerTitleAlign="center"
        headerRight={() => {
          return (
            <Image
              source={require('../../../../assets/icons/message.png')}
              style={{marginRight: '14%'}}
            />
          );
        }}
      />
      <View style={styles.container}>
        <View style={styles.notificationItem}>
          <Text style={styles.title}>Queenstown Hotel is Closed</Text>
          <Text style={styles.time}>Today at 8am</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.notificationItem}>
          <Text style={styles.title}>Arriving at 360 Degree Gym</Text>
          <Text style={styles.time}>15 mins</Text>
        </View>
      </View>
    </>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.9, // 90% of the screen width
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 1}, // Shadow position
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 4, // Shadow blur radius
    padding: 16,
    marginVertical: 10,
    alignSelf: 'center',
  },
  notificationItem: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    color: '#777777',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
});

export default OwnerNotificationsScreen;
