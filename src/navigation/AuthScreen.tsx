// /navigation/AuthScreen.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomtab/BottomTab';
import CarScreen from '../screens/Car/Car';
import Review from '../screens/Review/Review';
import Booking from '../screens/Booking/Details/Booking';
import Payment from '../screens/Booking/Payment/Payment';
import Confirmation from '../screens/Confirmation/Confirmation';
import Status from '../screens/Booking/PaymentStatus/Status';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/ProfileScreen/Profile';
import EditProfile from '../screens/Profile/Update/Profile';
const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false , animation : 'reveal_from_bottom' }}>
      <Stack.Screen  name="MainTabs" component={BottomTabs} />
      <Stack.Screen  name="CarScreen" component={CarScreen} />
      <Stack.Screen  name="Review" component={Review} />
      <Stack.Screen  name="Booking" component={Booking} />
      <Stack.Screen  name="Payment" component={Payment} />
      <Stack.Screen  name="Confirmation" component={Confirmation} />
      <Stack.Screen  name="Status" component={Status} />
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen  name="Profile" component={Profile} />
      <Stack.Screen  name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default AuthScreen;
