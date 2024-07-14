import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

export default function HarvestDashboard(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={{ paddingBottom: 130 }}>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("./assets/Banner2.png")}
          />

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                height: "auto",
                width: "90%",
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  height: "auto",
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
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding}>
                  Harvest Smarter, Predict, Analyze & Cultivate.
                </Text>
                <View>
                  <Text
                    style={{
                      paddingTop: 5,
                      textAlign: "justify",
                      lineHeight: 24,
                      letterSpacing: -0.5,
                    }}
                  >
                    Our focus is on optimizing gherkin cultivation through
                    advanced technology. We offer a component that includes
                    accurate harvest predictions using machine learning,
                    analysis of factors directly affecting yields, and a
                    knowledge hub for farmers. This platform provides valuable
                    insights and best practices to enhance cultivation, ensuring
                    eco-friendly and sustainable farming.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <View></View>
            <View>
              {/* <LottieView
                  source={require("./animations/Animation - 1719145590451.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200, }}
                /> */}
              <Image
                source={require("./assets/harvest dashboard.jpeg")}
                style={{ width: "100%", height: 150 }}
              />
              <View
                style={{
                  height: "auto",
                  alignSelf: "center",
                  width: "80%",
                  paddingTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="pagelines"
                  size={25}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text
                  style={{
                    textAlign: "justify",
                    lineHeight: 24,
                    letterSpacing: -0.5,
                  }}
                >
                  Predict your harvest seamlessly! Click the button below to
                  complete the required fields, and our intelligent system will
                  predict the actual harvest for you. Gain valuable insights and
                  optimize your yield with ease.
                </Text>

                <View style={{ paddingTop: 20 }}>
                  <Button
                    title="Predict harvest"
                    onPress={() => navigation.navigate("PredictHarvest")}
                    color={"#33705b"}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 30 }}>
            <View></View>
            <View>
              {/* <LottieView
                  source={require("./animations/Animation - 1719145590451.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200, }}
                /> */}

              <Image
                source={require("./assets/fertilizer1.jpeg")}
                style={{ width: "100%", height: 150 }}
              />

              <View
                style={{
                  height: "auto",
                  alignSelf: "center",
                  width: "80%",
                  paddingTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="slack"
                  size={25}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text
                  style={{
                    textAlign: "justify",
                    lineHeight: 24,
                    letterSpacing: -0.5,
                  }}
                >
                  With our advanced factor analysis feature, you can identify
                  the key factors influencing harvest predictions. This powerful
                  tool provides actionable suggestions to align actual harvests
                  with expected values, helping you to avoid deficiencies or
                  excesses. Understanding these critical factors enables better
                  decision-making and ensures optimal crop yields.
                </Text>

                <View style={{ padding: 20 }}>
                  <Button
                    title="Factor Analysis"
                    onPress={() => navigation.navigate(" ")}
                    color={"#33705b"}
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
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    color: "#061f1e",
    letterSpacing: 1.5,
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
});
