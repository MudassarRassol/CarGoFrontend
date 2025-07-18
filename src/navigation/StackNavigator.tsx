// /navigation/StackNavigator.tsx
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import OnboardingScreenTwo from '../screens/onboarding/Onboarding.screen.two';
import Onboarding from '../screens/onboarding/Onboarding.screen';
import { RootStackParamList } from './types';
import SignIn from '../screens/SignIn/SignIn.screen';
import SignUp from '../screens/SignUp/SignUpScree';
import Reset from '../screens/reset/ResetScreen';
import ConfirmCode from '../screens/reset/ConfirmCode';
import Home from '../screens/Home/Home';
import ConfirmCodeSms from '../screens/reset/ConfirmCodeSms';
const Stack = createStackNavigator<RootStackParamList>();
import VarifyPhoneNumber from '../screens/reset/VarifyPhoneNumber';
const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen name="ScreenOne" component={Onboarding} />
      <Stack.Screen name="ScreenTwo" component={OnboardingScreenTwo} />
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Reset' component={Reset} />
      <Stack.Screen name='ConfirmCode' component={ConfirmCode}  />
       <Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='ConfirmCodeSms' component={ConfirmCodeSms} />
       <Stack.Screen name='VarifyPhoneNumber' component={VarifyPhoneNumber} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
