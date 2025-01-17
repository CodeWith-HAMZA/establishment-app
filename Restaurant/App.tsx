import * as React from 'react';
import FlashMessage from 'react-native-flash-message';
import {View, Text, Image, StatusBar, Button} from 'react-native';
import {
  createStaticNavigation,
  DefaultTheme,
  NavigationContainer,
  useLinkBuilder,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PlatformPressable} from '@react-navigation/elements';
import VectorIcon from './components/shared/vector-icon';
import SplashScreen from './screens/splash';
import BottomTabsNavigation from './navigations/RootBottomTabs';
import SigninScreen from './screens/auth/sign-in';
import {myCustomTheme} from './utils/theme';
import SignUpScreen from './screens/auth/sign-up';
import SelectRoleScreen from './screens/auth/select-role';
import FilterPlacesScreen from './screens/root/filter-places';
import SearchResultsScreen from './screens/root/search-results';
import Test from './components/lists/test';
import EstablishmentLocationScreen from './screens/root/establishment-location';
import ReusableBottomSheet from './components/shared/bottom-sheet';
import PlaceDirectionsScreen from './screens/root/place-directions';
import EstablishmentDetailsScreen from './screens/root/establishment-details';
import ReviewsScreen from './screens/root/reviews';
import PostReviewScreen from './screens/root/post-review';
import EditProfileScreen from './screens/root/edit-profile';
import Test2 from './components/lists/test2';
import VerifyCodeScreen from './screens/auth/verify-otp';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {RootState} from './store/index';
import AuthProvider from './providers/auth.provider';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import MultiStepQuestionnaireForm from './components/forms/multi-step-questionaire';
import MultistepAccessibilityScreen from './screens/root/owner/multi-step-questionaire';
import OwnerBottomTabsNavigation from './navigations/OwnerBottomTabs';
import PostEstablishmentScreen from './screens/root/owner/post-establishment';
import OwnerReviewsScreen from './screens/root/owner/owner-reviews';
import ForgotPasswordScreen from './screens/auth/forgot-password';
import ChangePasswordScreen from './screens/auth/change-password';
import HereMaps from './screens/root/here-maps';
import Demo from './screens/root/demo';
export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('Details')}>Home Screen</Text>
    </View>
  );
}

export function DetailScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate('TabsNavigation')}>
        Details Screen
      </Text>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screenOptions: {headerShown: false},
  initialRouteName: 'Demo',
  screens: {
    TabsNavigation: BottomTabsNavigation,
    OwnerTabsNavigation: OwnerBottomTabsNavigation,

    Splash: SplashScreen,
    SignIn: SigninScreen,
    SignUp: SignUpScreen,
    Demo: Demo,
    FilterPlaces: FilterPlacesScreen,
    SelectRole: SelectRoleScreen,
    SearchResults: SearchResultsScreen,
    EstablishmentLocation: EstablishmentLocationScreen,
    PlaceDirections: PlaceDirectionsScreen,
    EstablishmentDetails: EstablishmentDetailsScreen,
    Reviews: ReviewsScreen,
    HereMaps: HereMaps,
    OwnerReviews: OwnerReviewsScreen,
    PostReview: PostReviewScreen,
    EditProfile: EditProfileScreen,
    MultiStepAccessibility: MultistepAccessibilityScreen,
    PostEstablishment: PostEstablishmentScreen,
    VerifyOtp: VerifyCodeScreen,
    ForgotPassword: ForgotPasswordScreen,
    ChangePassword: ChangePasswordScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Demo/>
     </>
  );
}
{/* <MultiStepQuestionnaireForm /> */}
