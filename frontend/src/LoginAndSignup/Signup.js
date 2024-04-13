import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./LandingPageConstants";
import Field from "./Field";
import LandingPageButton from "./LandingPageButton";

const Signup = (props) => {
  return (
    <Background>
      <View style={{alignItems:'center'}}>
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
          <Field placeholder="Name" keyboardType="email-address" />
          <Field placeholder="Email" keyboardType="email-address" />
          <Field placeholder="Location" keyboardType="email-address" />
          <Field placeholder="Contact No" keyboardType={"number"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent:'center',
              paddingRight:20,
              paddingLeft:20
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold"}}>
              By signing in, you agree to our{" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: "bold"}}>
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingRight:20,
              paddingLeft:20,
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "grey", fontWeight: "bold"}}>
              And{" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: "bold" }}>
              Privacy Policy
            </Text>
          </View>
          <LandingPageButton
            textColor="white"
            bgColor={darkGreen}
            btnLabel={"Sign Up"}
            press={() => {
              alert("Fuck U Too!");
              props.navigation.navigate("Login");
            }}
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
