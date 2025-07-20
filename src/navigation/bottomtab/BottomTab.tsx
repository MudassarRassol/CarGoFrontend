import React, { lazy } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile'
import Icon from 'react-native-vector-icons/Feather';

import { colors } from '../../theme/color';
import { Bell, BellDotIcon, MessageCircle, SearchIcon, UserRoundIcon, View } from 'lucide-react-native';
import Search from '../../screens/Search/Search';
import Notifications from '../../screens/Notifications/Notifications';
import Message from '../../screens/Message/Message';
import { useRoute } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const route = useRoute();
  return (
    <Tab.Navigator
      screenOptions={({route})=>(
        {
        keyboardHidesTabBar: true,
        headerShown: false,
        tabBarShowLabel: false,
        lazy : false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 10,
          marginHorizontal: 10,
          borderRadius: 100,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIcon : ({focused, size})=>{
          let iconName:string = 'home';
          if (route.name == 'home'){
            iconName = focused ? 'home' : 'home';
          }
          else if (route.name == 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name == 'Message') {
            iconName = focused ? 'message' : 'message';
          } else if (route.name == 'Notifications') {
            iconName = focused ? 'notifications-none' : 'notifications-none';
          } else if (route.name == 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }
          return(
            <View >
              <MaterialIcons
                name={iconName}
                size={24}
                color={focused ? colors.white : colors.icon}
              />
            </View>
          )
        }
      }
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />
      <Tab.Screen
        name="Message"
        component={Message}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
