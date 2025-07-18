// /navigation/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0.5,
          elevation: 0,
          backgroundColor : 'black',
          position : 'absolute',
          bottom : 10 , 
          marginHorizontal : 10 , 
          borderRadius : 100,
          // flexDirection : 'row',
          // alignItems : 'center'
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
