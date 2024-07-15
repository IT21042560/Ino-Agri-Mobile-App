import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import {
  darkGreen,
  shadegreen,
  fontgreen,
} from "../LoginAndSignup/LandingPageConstants";
import NextButton from "./NextButton";

export default function PredictHarvest(props) {
  const navigation = useNavigation();

  const bulletPoints = [
    "The details of the project",
    "The soil condition",
    "Fertilizer amounts",
    "Provide the season of the crop",
    "Enter the grade of the crop",
    "Expected rainfall",
    "Expected temperature",
    "Expected harvest from the crop",
  ];

  const renderItem = ({ item }) => (
    <View style={styles.bulletItem}>
      <FontAwesome name="envira" size={20} color={darkGreen} />
      
      <Text style={styles.bulletText}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("./assets/harvest4.jpeg")}
          />

          <View style={{ alignItems: "center" }}>
            <Text style={styles.mainHeading}>
              Actual Harvest Prediction
            </Text>
            <Text style={styles.subHeading}>
              To predict the Actual Harvest of your crop, you need to enter the below details ...
            </Text>

            <FlatList
              data={bulletPoints}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.bulletList}
            />

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>

                <View style={styles.buttonContainer}>
                  <NextButton
                    textColor="white"
                    width={150}
                    bgColor={darkGreen}
                    btnLabel={"Let's Go ..."}
                    page="CultivationDetails"
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
  mainHeading: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    letterSpacing: 1.5,
  },
  subHeading: {
    color: "black",
    fontSize: 15,
    padding: 10,
    lineHeight: 25,
    textAlign: 'center',
  },
  bulletList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bulletText: {
    marginLeft: 10,
    color: "black",
    fontSize: 15,
  },
  formContainer: {
    backgroundColor: shadegreen,
    height: 80,
    width: "100%",
    borderTopRightRadius: 100,
    //addingTop: 10,
    
  },
  inputContainer: {
    height: 150,
    width: "100%",
    borderTopRightRadius: 100,
    marginTop: 5,
  },
  iconStyle: {
    padding: 10,
  },
  formTitle: {
    color: fontgreen,
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: 5,
    paddingLeft: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
