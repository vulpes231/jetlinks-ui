import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StatusBar,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Auth() {
  const navigation = useNavigation();

  const handleSignUpClick = () => {
    navigation.navigate("Signup");
  };

  const handleSignInClick = () => {
    navigation.navigate("Signin");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text
          style={{
            marginVertical: 15,
            textAlign: "center",
            // alignSelf: "flex-start",
            color: "#fff",
            fontWeight: 400,
            fontSize: 16,
            textTransform: "capitalize",
          }}
        >
          Unleash the Power of Instant Exchange with{" "}
          <Text
            style={{
              // marginVertical: 15,
              // textAlign: "center",
              // // alignSelf: "flex-start",
              color: "red",
              fontWeight: 700,
              fontSize: 18,
              textTransform: "capitalize",
            }}
          >
            Jetlink
          </Text>
        </Text>
        <Image
          style={styles.image}
          source={require("../../assets/traders.png")}
        ></Image>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.login} onPress={handleSignInClick}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup} onPress={handleSignUpClick}>
            <Text style={styles.signupText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginVertical: 15,
            // textAlign: "left",
            // alignSelf: "flex-start",
            color: "#fff",
            fontWeight: 100,
          }}
        >
          Get started in 3 easy steps
        </Text>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Entypo name="add-user" size={18} color="#BF3434" />
            <Text style={styles.iconText}>Sign Up</Text>
          </View>
          <View style={styles.icon}>
            <AntDesign name="login" size={18} color="#BF3434" />
            <Text style={styles.iconText}>Sign In</Text>
          </View>
          <View style={styles.icon}>
            <FontAwesome name="exchange" size={18} color="#BF3434" />
            <Text style={styles.iconText}>Start Trading</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#333",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  image: {
    height: 100,
    width: 100,
    marginVertical: 30,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    marginVertical: 25,
  },
  icon: {
    backgroundColor: "#F2F2F2",
    padding: 5,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center", // Added justifyContent
    borderRadius: 10, // Adjusted borderRadius
  },

  iconText: {
    color: "#BF3434",
    textAlign: "center",
    marginTop: 2,
    fontWeight: 100,
  },
  login: {
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "red",
    padding: 12,
    width: "100%",
    marginBottom: 10,
  },
  signup: {
    backgroundColor: "red",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    marginBottom: 10,
  },
  signupText: {
    color: "#fff",
    textAlign: "center",
  },
  loginText: {
    color: "red",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
});
