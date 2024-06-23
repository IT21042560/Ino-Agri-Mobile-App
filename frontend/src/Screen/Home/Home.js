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

const Home = (props) => {
  const { UserLogOut } = useContext(AuthContext);

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
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("../assets/pest_cover.png")}
          />

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                backgroundColor: "#2f4f4f",
                height: 100,
                width: "90%",
                alignSelf: "center",
                paddingTop:10
              }}
            >
              <View
                style={{
                  backgroundColor: "#004242",
                  height: 'auto',
                  alignSelf: "center",
                  width: "90%",
                  paddingTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="lightbulb-o"
                  size={30}
                  color={"white"}
                  style={{
                    borderRadius: 100,
                    padding:2,
                    
                  }}
                />
                <Text style={{fontSize:18, color:'#68e8cb', fontWeight:'bold'}}>Innovation & sustainability are our commitment</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
