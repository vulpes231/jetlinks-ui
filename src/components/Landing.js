import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Landing() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.text}>Jetlinks</Text>
        <MaterialCommunityIcons name="loading" size={24} color="white" />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ED462F",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    flex: 1,
  },
  text: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
});
