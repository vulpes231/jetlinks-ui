import React from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";

import React from "react";

export default function Signin() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>Sign In to start trading</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
