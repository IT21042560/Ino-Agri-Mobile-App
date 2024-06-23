import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";

export default function PestDashboard(props) {
  return (
    <View
     style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingTop: 30,
      }}>
    <Header />
      
    <Footer />
    </View>
  );
}

const styles = StyleSheet.create({});
