import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const initState = {
  email: "",
  password: "",
};

export default function Signup() {
  const [form, setForm] = useState(initState);

  const navigation = useNavigation();

  const handleSignInClick = () => {
    navigation.navigate("Signin");
  };

  const handleInputChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const goHome = () => {
    navigation.navigate("Auth");
  };

  const handleSignup = () => {
    console.log(form);
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
            Signup
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginBottom: 15,
              fontWeight: 100,
            }}
          >
            Sign up to start trading
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
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={handleSignInClick}>
            <Text style={styles.boldRedText}>Login now</Text>
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
