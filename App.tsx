import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import Onboarding from "./src/screens/onboarding/Onboarding.screen";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
function App() {
  return (
    <View style={{ flex: 1 , backgroundColor : 'black' }}  >
      <StatusBar hidden={true} />
      <StackNavigator />
    </View>
  );
}

export default App;

