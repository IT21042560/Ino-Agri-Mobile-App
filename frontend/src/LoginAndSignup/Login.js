import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Background from "./Background";
import { darkGreen } from "./LandingPageConstants";
import Field from "./Field";
import LandingPageButton from "./LandingPageButton";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 54,
            fontWeight: "bold",
            marginVertical: 40,
          }}
        >
          Login
        </Text>

        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: "100%",
            borderTopLeftRadius: 130,
            paddingTop: 40,
            alignItems: "center",
            marginTop:60
          }}
        >
        <Image
          source={require("./assets/hjs_logo.png")}
          style={{ width: 70, height: 50, backgroundColor:darkGreen, borderRadius:45}}
        />
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: "bold" }}>
            Welcome !
          </Text>
          <Text
            style={{
              fontSize: 19,
              color: "gray",
              fontWeight: "bold",
              marginBottom: 40,
            }}
          >
            Loging to your account
          </Text>
          <Field placeholder="Email or Username" keyboardType="email-address" />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 60,
            }}
          >
            <Text
              style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password?{" "}
            </Text>
          </View>
          <LandingPageButton
            textColor="white"
            bgColor={darkGreen}
            btnLabel={"Login"}
            press={() => alert("Fuck U!")}
          />
          <View style={{borderBottomColor:'black', borderBottomWidth:1}}/>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text> Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: darkGreen, fontWeight: "bold" }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
