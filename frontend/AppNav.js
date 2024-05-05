import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./src/LoginAndSignup/LandingPage";
import Signup from "./src/LoginAndSignup/Signup";
import Login from "./src/LoginAndSignup/Login";
import { AuthContext } from "./src/Context/AuthContext";
import Home from "./src/Screen/Home/Home";
import PestDashboard from "./src/PestControll/PestDashboard";
import DiseasesDashboard from "./src/DiseasesControl/DiseasesDashboard";
import FeritilizerDashboard from "./src/FertilizerPredict/FeritilizerDashboard";
import CultivationDetails from "./src/FertilizerPredict/CultivationDetails";
import SoilDetails from "./src/FertilizerPredict/SoilDetails";
import CostDashboard from "./src/CostPredict/CostDashboard";
import CostData from "./src/CostPredict/CostData";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={"large"} />
    </View>
    )
  }

  return (
    <NavigationContainer>
      {userToken !== null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PestDashboard" component={PestDashboard} />
        <Stack.Screen name="DiseasesDashboard" component={DiseasesDashboard} />
        <Stack.Screen name="FertilizerDashboard" component={FeritilizerDashboard} />
        <Stack.Screen name="CultivationDetails" component={CultivationDetails} />
        <Stack.Screen name="SoilDetails" component={SoilDetails} /> 
        <Stack.Screen name="CostDashboard" component={CostDashboard} /> 
        <Stack.Screen name="CostData" component={CostData} /> 

        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
