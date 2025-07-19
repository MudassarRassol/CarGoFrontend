import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Profile from '../../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../theme/color';
import { Bell, BellDotIcon, SearchIcon, UserRoundIcon } from 'lucide-react-native';
import Search from '../../screens/Search/Search';
import Notifications from '../../screens/Notifications/Notifications';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
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
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={colors.white} size={20} />
          ),
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SearchIcon size={20} color={colors.white} />
          ),
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Bell size={20} color={colors.white} />
          ),
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserRoundIcon size={20} color={colors.white} />
          ),
          tabBarActiveTintColor: 'red',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
