// /navigation/AuthScreen.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomtab/BottomTab';
import CarScreen from '../screens/Car/Car';


const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false , animation : 'reveal_from_bottom' }}>
      <Stack.Screen  name="MainTabs" component={BottomTabs} />
      <Stack.Screen  name="CarScreen" component={CarScreen} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
