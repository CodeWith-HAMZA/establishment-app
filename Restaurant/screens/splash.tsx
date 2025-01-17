import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import FastImage from 'react-native-fast-image';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {user, loading} = useSelector((state: RootState) => state.auth);

  if (!loading && !user) {
    // return
    // @ts-ignore
    navigation.replace('PlaceDirections');
    return null;
  }

  if (!loading && user) {
    // @ts-ignore
    if (user.role === 'owner') navigation.replace('OwnerTabsNavigation');

    // @ts-ignore
    if (user.role === 'user') navigation.replace('TabsNavigation');
    return null;
  }

  // return (
  //   <View
  //     style={{
  //       minHeight: '100%',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}>
  //     <Image
  //       source={require('./../assets/images/logo1.png')}
  //       resizeMode="contain"
  //       style={{width: '60%', height: '60%'}}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <FastImage
        source={require('./../assets/images/loti.gif')}
        // resizeMode="contain"
        style={{width: '60%', height: '60%'}}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Animatable.Image
        animation="pulse"
        
        duration={3000}
        easing={'ease-in-out'}
        delay={1000}
        iterationCount={'infinite'}
        source={require('./../assets/images/logo1.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Set your background color
  },
  logo: {
    width: 150,
    height: 150,
  },
});

