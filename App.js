import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const MainNavigator = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Home" component={Home} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
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