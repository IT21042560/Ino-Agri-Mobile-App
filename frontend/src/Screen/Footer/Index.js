import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#123524",
        opacity: 0.9,
        height: 70,
        width: "100%",
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        paddingLeft: 25,
        paddingRight: 25,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("PestDashboard")}>
        <FontAwesome
          name="bug"
          size={25}
          color={"white"}
          style={{ paddingRight: 5 }}
        />
      </TouchableOpacity>

      <TouchableOpacity >
      <FontAwesome
        name="leaf"
        size={25}
        color={"white"}
        style={{ marginLeft: "auto", paddingRight: 5 }}
      />
      </TouchableOpacity>

      <TouchableOpacity >
      <FontAwesome
        name="pagelines"
        size={25}
        color={"white"}
        style={{ marginLeft: "auto", paddingRight: 5 }}
        onPress={() => navigation.navigate("HarvestDashboard")}
      />
      </TouchableOpacity>

      <TouchableOpacity >
      <FontAwesome
        name="dollar"
        size={25}
        color={"white"}
        style={{ marginLeft: "auto", paddingRight: 5 }}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
