import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: "#014421",
        opacity: 0.9,
        height: 60,
        padding: 2,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../LoginAndSignup/assets/hjs_logo.png")}
        style={{ width: 35, height: 35, marginLeft: 25 }}
      />
      <Text
        style={{
          color: "#ed9121",
          marginLeft: 60,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        INO AGRI FARM
      </Text>
      <FontAwesome
        name="bars"
        size={25}
        color={"white"}
        style={{ marginLeft: "auto", paddingRight: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
