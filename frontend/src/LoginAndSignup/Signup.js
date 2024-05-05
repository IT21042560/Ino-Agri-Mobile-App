import { Image, Text, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState } from "react";
import Background from "./Background";
import { darkGreen } from "./LandingPageConstants";
import LandingPageButton from "./LandingPageButton";
import UserApi from "../Api/UserApi";
import axios from "axios";

const Signup = (props) => {
  const [uName, setFullName] = useState("");
  const [uEmail, setEmail] = useState("");
  const [uLocation, setLocation] = useState("");
  const [uContactNo, setContactNo] = useState("");
  const [uPassword, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");

  const usrSignUp = () => {
    if (
      uName != "" &&
      uEmail != "" &&
      uLocation != "" &&
      uContactNo != "" &&
      uPassword != "" &&
      conpassword != ""
    ) {
      if (conpassword === uPassword) {
        const ob = {
          uName,
          uEmail,
          uLocation,
          uContactNo,
          uPassword,
        };
        console.log('check',ob)
        UserApi
          .post("/signup", ob)
          .then(() => {
            alert("User Registred!");
            props.navigation.navigate("Login");
          })
          .catch(() => {
            alert("Error");
          });
      } else {
        alert("Error");
      }
    } else {
      alert("Error");
    }
  };

  return (
    <Background>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "white",
            fontSize: 54,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Register
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Create a new account
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: "100%",
            borderTopRightRadius: 100,
            paddingTop: 40,
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            placeholderTextColor={darkGreen}
            placeholder="Full Name"
            onChangeText={(e) => setFullName(e)}
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            onChangeText={(e) => setEmail(e)}
            placeholderTextColor={darkGreen}
            placeholder="Email"
            keyboardType="email-address"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            onChangeText={(e) => setLocation(e)}
            placeholderTextColor={darkGreen}
            placeholder="Location"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            onChangeText={(e) => setContactNo(e)}
            placeholderTextColor={darkGreen}
            placeholder="Contact No"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            onChangeText={(e) => setPassword(e)}
            placeholderTextColor={darkGreen}
            placeholder="Password"
            secureTextEntry={true}
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 10,
              width: "80%",
              backgroundColor: "rgb(220,220,220)",
              marginVertical: 10,
              padding: 15,
            }}
            onChangeText={(e) => setConPassword(e)}
            placeholderTextColor={darkGreen}
            placeholder="Confirm Password"
            secureTextEntry={true}
          ></TextInput>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold" }}>
              By signing in, you agree to our{" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: "bold" }}>
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight: 20,
              paddingLeft: 20,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold" }}>And </Text>
            <Text style={{ color: darkGreen, fontWeight: "bold" }}>
              Privacy Policy
            </Text>
          </View>
          <LandingPageButton
            textColor="white"
            bgColor={darkGreen}
            btnLabel={"Sign Up"}
            press={usrSignUp}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text> Already have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: darkGreen, fontWeight: "bold" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
