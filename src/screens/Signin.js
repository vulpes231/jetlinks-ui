import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const initState = {
  email: "",
  password: "",
};

export default function Signin() {
  const [form, setForm] = useState(initState);

  const navigation = useNavigation();

  const handleSignUpClick = () => {
    navigation.navigate("Signup");
  };

  const resetInput = () => {
    setForm(initState);
  };

  const goHome = () => {
    navigation.navigate("Auth");
  };

  const handleInputChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log(form);
    resetInput();
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.form}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              textTransform: "capitalize",
              textAlign: "center",
              marginVertical: 15,
            }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              fontWeight: 200,
              marginBottom: 20,
            }}
          >
            Enter your details to continue
          </Text>
        </View>
        <View style={styles.input}>
          {/* <Text>Username</Text> */}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
            }}
            onChangeText={(value) => handleInputChange("email", value)}
            value={form.email}
            placeholder="Email Address"
          />
        </View>
        <View style={styles.input}>
          {/* <Text>Password</Text> */}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 2,
              padding: 5,
              borderRadius: 10,
            }}
            onChangeText={(value) => handleInputChange("password", value)}
            value={form.password}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 8 }}
        >
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 10,
              fontWeight: 200,
            }}
          >
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={handleSignUpClick}>
            <Text style={styles.boldRedText}>Sign up now</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginVertical: 35,
            justifyContent: "center",
          }}
          onPress={goHome}
        >
          <Ionicons
            name="arrow-back-circle"
            size={24}
            color="red"
            style={{ fontSize: 15 }}
          />
          <Text style={{ color: "red" }}>Go back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 13,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginBottom: 5,
  },
  boldRedText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "red",
  },
});
