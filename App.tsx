import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Onboarding from './src/screens/onboarding/Onboarding.screen';
import StackNavigator from './src/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/utils/redux/store';
function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden={true} />
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </View>
  );
}

export default App;
