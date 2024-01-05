import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Landing from "./src/components/Landing";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
