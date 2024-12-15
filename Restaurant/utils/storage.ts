import * as Keychain from 'react-native-keychain';
import {AUTH_TOKEN} from '../constants';
import {showMessage} from 'react-native-flash-message';

export const storeAuthToken = async (token: string) => {
  try {
    await Keychain.setGenericPassword(AUTH_TOKEN, token, {
      // accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      storage: Keychain.STORAGE_TYPE.AES_GCM_NO_AUTH,
    });
  } catch (error) {
    console.log('Error storing token:', error);
  }
};

export const logout = async () => {
  try {
    await Keychain.resetInternetCredentials();
  } catch (error) {
    showMessage({message: 'Error logging out', type: 'danger'});
  }
};

// Retrieve JWT token
export const getAuthToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    return credentials?.password;
  } catch (error) {
    console.log('Error retrieving token:', error);
    return null;
  }
};
