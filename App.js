import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// pages
import Home from "./pages/home/Home";
import Menu from "./global/components/Menu";

const Stack = createStackNavigator();

const getFonts = () =>
  Font.loadAsync({
    "nunitosans-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunitosans-semibold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    "nunitosans-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
  });

function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  return isFontsLoaded ? (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setIsFontsLoaded(true)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
