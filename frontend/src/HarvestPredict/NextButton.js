import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  export default function NextButton({ bgColor, btnLabel, textColor, page, width }) {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
      onPress={() => navigation.navigate(page)}
        style={{
          backgroundColor: bgColor,
          borderRadius: 20,
          alignItems: "center",
          width: width,
          paddingVertical:10,
          marginVertical:10,
          marginRight:20
        }}
      >
        <Text style={{ color: textColor, fontSize: 20, fontWeight: "bold", letterSpacing: 2 }}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({});
  