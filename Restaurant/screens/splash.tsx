import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {user, loading} = useSelector((state: RootState) => state.auth);

  if (!loading && !user) {
    // @ts-ignore
    navigation.replace('SignIn');
    
    return null;
  }

  if (!loading && user) {
    // @ts-ignore
    if (user.role === 'owner') navigation.replace('OwnerTabsNavigation');

    // @ts-ignore
    if (user.role === 'user') navigation.replace('TabsNavigation');
    return null;
  }

  return (
    <View
      style={{
        minHeight: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('./../assets/images/splash-image.png')}
        resizeMode="contain"
        style={{width: '60%', height: '60%'}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
