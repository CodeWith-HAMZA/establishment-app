import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  AppState,
  ActivityIndicator,
} from 'react-native';
import VectorIcon from '../../components/shared/vector-icon';
import {useNavigation, useTheme} from '@react-navigation/native';
import {CustomTheme} from '../../utils/theme';
import TextBox from '../../components/shared/text-box';
import PrimaryButton from '../../components/shared/buttons/primary.button';
import {Header} from '@react-navigation/elements';
import {useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';

const EditProfileScreen = () => {
  const theme = useTheme() as CustomTheme;
  const {user, loading} = useSelector((state: RootState) => state.auth);
    const nav = useNavigation()
  if(loading ){
    
    return <ActivityIndicator size={'large'} style={{margin: 'auto'}} color={theme.colors.primary}  />;
  }

  
  return (
    <>
      <Header
        back={{href: 'Back', title: 'Back'}}
        title="Your Profile"
        headerTitleAlign="center"
      />
      <View style={styles.container}>
        {/* Header */}
 
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: user.profile,
            }}
            style={[styles.profileImage, {borderColor: theme.colors.primary}]}
          />
          <TouchableOpacity
            style={[
              styles.editIcon,
              {backgroundColor: theme.colors.primary, padding: 6},
            ]}>
            <VectorIcon library="Feather" name="edit" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>@{user?.name} ({user?.role})</Text>

        {/* Input Fields */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Full Name</Text>

            <TextBox
              value={user?.name}
              placeholder="Full Name"
              secureTextEntry={false}
              onChangeText={() => {}}
            />
          </View>

          {/* Email Address */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextBox
              value={user?.email}
              placeholder="Full Name"
              secureTextEntry={false}
              onChangeText={() => {}}
              rightIconColor="#3EB655"
              rightIconBtn="checkmark-circle"
              rightIconLibrary={'Ionicons'}
            />
          </View>

          {/* Phone Number */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone number</Text>
            <TextBox
              value=""
              placeholder="+1 (078) 234-7878"
              secureTextEntry={false}
              onChangeText={() => {}}
            />
          </View>
        </View>

        {/* Save Button */}

        <PrimaryButton otherStyle={{bottom: '0%'}}>Save Changes</PrimaryButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    // borderEndColor: ''
    borderWidth: 4,
    resizeMode: 'cover',
  },
  editIcon: {
    position: 'absolute',
    bottom: '4%',
    // right: 0,
    left: '58%',
    borderColor: '#fff',
    borderWidth: 3,
    //  width: 28,
    // height: 28,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  formContainer: {
    marginTop: 30,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4D4D4D',
    marginBottom: 8,
  },
  inputField: {
    backgroundColor: '#F9F9F9',
    padding: 14,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    color: '#000',
    fontSize: 14,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 14,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  icon: {
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default EditProfileScreen;
