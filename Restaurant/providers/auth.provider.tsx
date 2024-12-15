import React, {ReactNode, useEffect} from 'react';

import {Provider, useDispatch, useSelector} from 'react-redux';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {
  setUser,
  clearUser,
  setLoading,
} from '../store/features/auth/auth.slice';
import store, {AppDispatch, RootState} from '../store';
import {getAuthToken, storeAuthToken} from '../utils/storage';
import SplashScreen from '../screens/splash';
import SignUpScreen from '../screens/auth/sign-up';
import {StatusBar, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {me} from '../services/auth.service';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const dispatch: AppDispatch = useDispatch();
  //   const navigation = useNavigation()

  useEffect(() => {
    const fetchAndValidateToken = async () => {
      // dispatch(setLoading(true));

      try {
        const token = await getAuthToken();
        console.log(token, ' estuhaotu');
        if (token) {
          const response = await me();
          console.log(response, ' SATOSHI');
          if (response) {
            dispatch(setUser(response.user));
            console.log(response, ' res');
          }
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        console.error('Token validation failed:', error);
        
        dispatch(clearUser());
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchAndValidateToken();
  }, [dispatch]);

  return children;
};

export default AuthProvider;
