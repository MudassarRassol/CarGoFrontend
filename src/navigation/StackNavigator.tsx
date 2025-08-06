// navigation/StackNavigator.tsx
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthScreen from './AuthScreen';
import NoAuthScreen from './NotAuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/redux/store';
import { setAuth } from '../utils/redux/authSlice';

const StackNavigator = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    const checkLogin = async () => {
      const login = await AsyncStorage.getItem('userlogin');
      dispatch(setAuth(login === 'true'));
    };
    checkLogin();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthScreen /> : <NoAuthScreen />}
    </NavigationContainer>
  );
};

export default StackNavigator;
