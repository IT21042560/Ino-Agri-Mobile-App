import { View, Text } from "react-native";
import React, { useMemo, useState } from "react";
import Background from "../LoginAndSignup/Background";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import RadioGroup from "react-native-radio-buttons-group";
import LandingPageButton from "../LoginAndSignup/LandingPageButton";
import { darkGreen } from "../LoginAndSignup/LandingPageConstants";

export default function FeritilizerDashboard(props) {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Project Details",
        value: "option1",
      },
      {
        id: "2",
        label: "N,P,K Level of soil",
        value: "option2",
      },
      {
        id: "3", // acts as primary key, should be unique and non-empty string
        label: "pH level of soil",
        value: "option1",
      },
      {
        id: "4",
        label: "Fertilizer usages",
        value: "option2",
      },
      {
        id: "5", // acts as primary key, should be unique and non-empty string
        label: "Rainfall",
        value: "option1",
      },
      {
        id: "6",
        label: "Temperature",
        value: "option2",
      },
      {
        id: "7", // acts as primary key, should be unique and non-empty string
        label: "Expected harvest",
        value: "option1",
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();
  return (
    <Background>
      <View
        style={{
          backgroundColor: "#006A42",
          height: 50,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 10 }}>
          <Feather name="menu" size={30} color="white" />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Harvest Prediction
          </Text>
        </View>
        <View style={{ paddingRight: 30, paddingTop: 10 }}>
          <AntDesign
            name="back"
            size={25}
            color="white"
            onPress={() => props.navigation.navigate("Home")}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: 350,
          width: "98%",
          borderTopRightRadius: 100,
          borderBottomLeftRadius: 100,
          paddingTop: 40,
          alignItems: "center",
          marginTop: 110,
        }}
      >
        <Text style={{ fontSize: 18 }}>
          {" "}
          First, you should collect the details of{" "}
        </Text>
        <View style={{ paddingTop: 20, alignItems: "flex-start" }}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            containerStyle={{ flexDirection: "column" }}
            labelStyle={{ textAlign: "right", fontSize: 15 }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <LandingPageButton
          bgColor={darkGreen}
          textColor={"white"}
          btnLabel={"Next"}
          press={() => props.navigation.navigate("CultivationDetails")}
        />
      </View>
    </Background>
  );
}
