// App.js
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Landing from "./src/screens/Landing";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import Auth from "./src/screens/Auth";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Landing}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ title: "Auth", headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign Up", headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
