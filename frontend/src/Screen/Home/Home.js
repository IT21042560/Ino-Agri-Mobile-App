import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Speech from 'expo-speech';



const Home = (props) => {
  const { UserLogOut } = useContext(AuthContext);

  const speak = () => {
    Speech.speak('ආයුබෝවන් ලෝකයට සාදරයෙන් පිළිගනිමු');
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        paddingTop: 30,
      }}
    >
      <Header />
      <View>
      <Button title="Speak" onPress={speak} />
    </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 3,
    padding: 5,
    marginLeft: 35,
    height: 100,
    width: 120,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    fontSize: 24,
    paddingTop: 10,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Home;
