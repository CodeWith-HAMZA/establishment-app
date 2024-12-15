import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import VectorIcon from '../../../../components/shared/vector-icon';
import {Header} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../../../components/shared/buttons/primary.button';
import {logout} from '../../../../utils/storage';
import { showMessage } from 'react-native-flash-message';

const MenuItem = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuIconWrapper}>
        {/* <VectorIcon name={icon} size={18} color="#D32F2F" /> */}
        <Image source={icon} />
      </View>
      <Text style={styles.menuText}>{title}</Text>
      <VectorIcon name="chevron-right" size={16} color="#D32F2F" />
    </TouchableOpacity>
  );
};

export default function OwnerAccountScreen() {
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header
        title="My Account"
        headerTitleAlign="center"
        headerShadowVisible
      />
      <View style={styles.container}>
        {/* Menu Items */}
        <MenuItem
          icon={require('../../../../assets/icons/account_circle.png')}
          title="Edit Owner's Information"
          onPress={() => {
            nav.navigate('EditProfile');
          }}
        />
        <MenuItem
          icon={require('../../../../assets/icons/location2.png')}
          title="Edit Establishment's Information"
          onPress={() => {
            nav.navigate('MultiStepAccessibility');
          }}
        />
        <MenuItem
          icon={require('../../../../assets/icons/gallery.png')}
          title="Edit Establishment Profile Photos"
          onPress={() => {
            nav.navigate('PostEstablishment');
          }}
        />
        <MenuItem
          icon={require('../../../../assets/icons/settings.png')}
          title="Settings"
          onPress={() => {
            nav.navigate('MultiStepAccessibility');
          }}
        />
        <MenuItem
          icon={require('../../../../assets/icons/group.png')}
          title="Accessibility Questionnaire"
          onPress={() => {
            nav.navigate('MultiStepAccessibility');
          }}
        />

        {/* Logout Button */}

        <PrimaryButton
          loading={loading}
          onPress={async () => {
            setLoading(true);
            await logout();
            showMessage({
              type: 'success',
              description: "Successfully Logged out",
              message: "Success"
            })
            nav.replace('SignIn');
            setLoading(false);
          }}
          otherStyle={{marginTop: 'auto', marginBottom: '10%'}}>
          Logout
        </PrimaryButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIconWrapper: {
    width: 30,
    height: 30,
    // backgroundColor: '#FDECEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D32F2F',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 'auto',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
