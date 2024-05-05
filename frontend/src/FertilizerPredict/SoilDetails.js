import { View, Text, TextInput } from "react-native";
import React, { useMemo, useState } from "react";
import Background from "../LoginAndSignup/Background";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import RadioGroup from "react-native-radio-buttons-group";
import LandingPageButton from "../LoginAndSignup/LandingPageButton";
import { darkGreen } from "../LoginAndSignup/LandingPageConstants";

export default function SoilDetails(props) {
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
          height: 590,
          width: "98%",
          borderTopRightRadius: 100,
          borderBottomLeftRadius: 100,
          paddingTop: 25,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 10,
            fontWeight: "bold",
            paddingBottom: 20,
          }}
        >
          {" "}
          2. Soil Details
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            Nitrogen Level [N]
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            Phosphorus Level [P]
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            Potassium Level [K]
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            pH Level
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <Text
          style={{
            fontSize: 18,
            paddingLeft: 10,
            fontWeight: "bold",
            paddingBottom: 15,
          }}
        >
          {" "}
          3. Fertiliser Details
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            Urea
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            TSP
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            MOP
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, marginLeft: 30, paddingTop: 12 }}>
            CaNo3
          </Text>
          <TextInput
            style={{
              color: darkGreen,
              width: "30%",
              backgroundColor: "rgb(220,220,220)",
              padding: 15,
              paddingLeft: 10,
            }}
            placeholderTextColor={darkGreen}
          ></TextInput>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <LandingPageButton
          bgColor={darkGreen}
          textColor={"white"}
          btnLabel={"Next"}
        />
      </View>
    </Background>
  );
}
