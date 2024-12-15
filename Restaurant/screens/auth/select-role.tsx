import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import GhostButton from '../../components/shared/buttons/ghost.button';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import {useNavigation} from '@react-navigation/native';

const SelectRoleScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require('./../../assets/images/logo.png')}
      />
      <Text style={styles.title}>Select Your Role</Text>

      <View style={styles.buttonContainer}>
        <PrimaryButton
          // @ts-ignore
          onPress={() => navigation.navigate('SignUp', {role: 'user'})}>
          I'm a User
        </PrimaryButton>
        <GhostButton
          onPress={() => {
            // @ts-ignore
            navigation.navigate('SignUp', {role: 'owner'});
          }}>
          I'm an Establishment Owner
        </GhostButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '12%',

    paddingHorizontal: '6%',
  },
  logo: {
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginVertical: 10,
    marginTop: '10%',
    color: '#333',
  },
});

export default SelectRoleScreen;
