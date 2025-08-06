// /navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreenTwo from '../screens/onboarding/Onboarding.screen.two';
import Onboarding from '../screens/onboarding/Onboarding.screen';
import { RootStackParamList } from './types';
import SignIn from '../screens/SignIn/SignIn.screen';
import SignUp from '../screens/SignUp/SignUpScree';
import Reset from '../screens/reset/ResetScreen';
import ConfirmCode from '../screens/reset/ConfirmCode';
import ConfirmCodeSms from '../screens/reset/ConfirmCodeSms';
const Stack = createStackNavigator<RootStackParamList>();
import VarifyPhoneNumber from '../screens/reset/VarifyPhoneNumber';
const NoAuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="ScreenTwo" component={OnboardingScreenTwo} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
      <Stack.Screen name="ConfirmCodeSms" component={ConfirmCodeSms} />
      <Stack.Screen name="VarifyPhoneNumber" component={VarifyPhoneNumber} />
    </Stack.Navigator>
  );
};

export default NoAuthScreen;
