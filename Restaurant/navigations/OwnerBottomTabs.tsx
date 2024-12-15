import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import {HomeScreen} from '../App';
import {PlatformPressable} from '@react-navigation/elements';
import {Image, View} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import OwnerDashboardScreen from '../screens/root/owner/bottom-tabs/dashboard';
 import OwnerAccountScreen from '../screens/root/owner/bottom-tabs/account';
import OwnerNotificationsScreen from '../screens/root/owner/bottom-tabs/notifications';
import AccountScreen from '../screens/root/bottom-tabs/account';

type IconLabel = 'Home' | 'Notification' | 'Profile';

type IconMapping = {
  [key in IconLabel]: any;
};

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.8,
        shadowRadius: 3.5,

        paddingVertical: '5%',
        marginHorizontal: '3%',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconMapping: IconMapping = {
          Home: require('./../assets/tabs-icons/home.png'),
          Notification: require('./../assets/tabs-icons/notification.png'),
          Profile: require('./../assets/tabs-icons/profile.png'),
        };
        let icon = iconMapping[label! as IconLabel] ? (
          <Image
            source={iconMapping[label! as IconLabel]}
            style={{tintColor: isFocused ? colors.primary : colors.text}}
            width={24}
            height={24}
          />
        ) : null;

        console.log(route);
        return (
          <PlatformPressable
            key={route.key}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            android_ripple={{radius: 1}}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>{icon}</View>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const OwnerBottomTabsNavigation = createBottomTabNavigator({
  tabBar: props => <MyTabBar {...props} />,
  screenOptions: {headerShown: false},
  initialRouteName: 'Home',
  screens: {
    Home: {screen: OwnerDashboardScreen, navigationKey: 'dashboard'},
    // Search: {screen: HomeScreen, navigationKey: 'Search'},
    Notification: {screen: OwnerNotificationsScreen, navigationKey: 'Notification'},
    Profile: {screen: OwnerAccountScreen, navigationKey: 'Profile'},
  },
});

export default OwnerBottomTabsNavigation;
