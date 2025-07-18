// /navigation/StackNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './AuthScreen';
import NoAuthScreen from './NotAuthScreen';

const StackNavigator = () => {
  const isAuthenticated = true; // Replace this with your actual auth logic

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthScreen /> : <NoAuthScreen />}
    </NavigationContainer>
  );
};

export default StackNavigator;
