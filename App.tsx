import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Onboarding from "./src/screens/onboarding/Onboarding.screen";

function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Onboarding />
    </View>
  );
}

export default App;
