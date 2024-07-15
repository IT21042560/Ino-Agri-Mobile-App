import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  Picker,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import {
  darkGreen,
  green,
  shadegreen,
  fontgreen,
} from "../LoginAndSignup/LandingPageConstants";
import NextButton from "./NextButton";

export default function FertilizerDetails(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("./assets/fertilizer4.jpeg")}
          />

          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                marginBottom: 10,
                letterSpacing: 1.5,
              }}
            >
              Actual Harvest Prediction
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 15,
                letterSpacing: 2,
              }}
            >
              Enter the fertilizer amount per acre
            </Text>

            <View
              style={{
                backgroundColor: shadegreen,
                height: 650,
                width: "100%",
                borderTopRightRadius: 100,
                paddingTop: 10,
                //alignItems: "flex-start",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: fontgreen,
                  fontSize: 18,
                  fontWeight: 900,
                  letterSpacing: 5,
                  paddingLeft: 10,
                }}
              >
                FERTILIZER DETAILS
              </Text>

              <View
                style={{
                  height: 700,
                  width: "100%",
                  borderTopRightRadius: 100,
                  //paddingLeft:30,
                  //alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={styles.subHedding}>Urea</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  //onChangeText={(e) => setFullName(e)}
                ></TextInput>

                <Text style={styles.subHedding}>TSP</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  //onChangeText={(e) => setFullName(e)}
                ></TextInput>

                <Text style={styles.subHedding}>MOP</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  //onChangeText={(e) => setFullName(e)}
                ></TextInput>

                <Text style={styles.subHedding}>CaNO3</Text>

                <TextInput
                  style={styles.textbox}
                  placeholderTextColor="grey"
                  placeholder="per acre"
                  //onChangeText={(e) => setFullName(e)}
                ></TextInput>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <NextButton
                    textColor="white"
                    width={260}
                    bgColor={darkGreen}
                    btnLabel={"Predict Actual Harvest"}
                    page=" "
                  />

                  
                </View>

                <View style={styles.predictionCard}>
                    <Text style={styles.predictionText}>
                      Actual Harvest 
                    </Text>
                    <Text style={styles.predictionText}>
                       Amount
                    </Text>
                  </View>
                  
                
              </View>

              
              
            </View>
            
          </View>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
  subHedding: {
    textAlign: "left",
    fontSize: 13,
    fontWeight: "800",
    color: darkGreen,
    paddingLeft: 20,
    letterSpacing: 1.5,
  },
  mainHeading: {
    paddingTop: 12,
    textAlign: "left",
    fontSize: 22,
    fontWeight: "bold",
    color: "#061f1e",
  },
  image: {
    width: 80,
    height: 90,
    marginLeft: 0,
    marginRight: 20,
  },
  imageGridContainer1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  imageGridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingTop: 10,
  },
  gridText: {
    textAlign: "center",
    color: "#6a859f",
    fontWeight: "bold",
  },
  textbox: {
    borderRadius: 15,
    color: darkGreen,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "rgb(220,220,220)",
    marginVertical: 10,
    padding: 15,
    marginLeft: 25,
  },
  dropdown: {
    height: 50,
    width: "80%",
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 100,
    marginVertical: 10,
    padding: 15,
  },
  predictionCard: {
    backgroundColor: green,
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    marginLeft: 40,
    alignItems: "center",
    width: 300,
  },
  predictionText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
