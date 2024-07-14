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
  
  export default function SoilDetails(props) {
    const navigation = useNavigation();
  
    return (
      <View style={styles.mainContainer}>
        <Header />
        <View style={{ paddingBottom: 130 }}>
          <ScrollView>
            <Image
              style={{ width: "100%", height: 180 }}
              source={require("./assets/fertilizer2.jpeg")}
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
                Enter the details about the soil condition
              </Text>
  
              <View
                style={{
                  backgroundColor: shadegreen,
                  height: 810,
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
                  SOIL DETAILS
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
                  <Text style={styles.subHedding}>pH value</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="pH value"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Calcium (Ca)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Magnesium (Mg)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Potassium (K)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Nitrogen (N)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Posporus (P)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <Text style={styles.subHedding}>Zinc (Zn)</Text>
  
                  <TextInput
                    style={styles.textbox}
                    placeholderTextColor="grey"
                    placeholder="Amount"
                    //onChangeText={(e) => setFullName(e)}
                  ></TextInput>
  
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      
                    }}
                  >
                    <NextButton
                      textColor="white"
                      width = {120}
                      bgColor={darkGreen}
                      btnLabel={"Next"}
                      
                      page = "FertilizerDetails"
                    />
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
  });
  