import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {PlatformPressable} from '@react-navigation/elements';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import SearchScreen from '../screens/root/bottom-tabs/search';
import HomeScreen from '../screens/root/bottom-tabs/home';
import NotificationScreen from '../screens/root/bottom-tabs/notifications';
import AccountScreen from '../screens/root/bottom-tabs/account';

type IconLabel = 'Home' | 'Search' | 'Notification' | 'Profile';

type IconMapping = {
  [key in IconLabel]: any; // You can replace 'any' with the specific type of your icon source
};

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 2,

        // borderWidth: 5,

        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.8,
        marginBottom: '-12%',
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
        let icon = null;

        if (label == 'Main') {
          return (
            <TouchableOpacity style={{bottom: '60%'}}>
              <Image
                source={require('./../assets/tabs-icons/red-button.png')}
              />
            </TouchableOpacity>
          );
        }
        const iconMapping: IconMapping = {
          Home: require('./../assets/tabs-icons/home.png'),
          Search: require('./../assets/tabs-icons/search.png'),
          Notification: require('./../assets/tabs-icons/notification.png'),
          Profile: require('./../assets/tabs-icons/profile.png'),
        };
        icon = iconMapping[label! as IconLabel] ? (
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

const BottomTabsNavigation = createBottomTabNavigator({
  tabBar: props => <MyTabBar {...props} />,
  screenOptions: {headerShown: false},
  initialRouteName: 'Home',
  screens: {
    Home: {screen: HomeScreen, navigationKey: 'home'},
    Search: {screen: SearchScreen, navigationKey: 'Search'},
    Main: {
      screen: () => {
        return (
          <View style={{backgroundColor: 'red'}}>
            <Text>Shadud</Text>
          </View>
        );
      },
    },
    Notification: {screen: NotificationScreen, navigationKey: 'Notification'},
    Profile: {screen: AccountScreen, navigationKey: 'Profile'},
  },
});

export default BottomTabsNavigation;
