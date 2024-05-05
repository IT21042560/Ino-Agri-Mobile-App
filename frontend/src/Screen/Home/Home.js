import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import LandingPageButton from "../../LoginAndSignup/LandingPageButton";
import { AuthContext } from "../../Context/AuthContext";
//import Button from "../../PestControll/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Background from "../../LoginAndSignup/Background";

const Home = (props) => {
  const { UserLogOut } = useContext(AuthContext);

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
            Ino Agri
          </Text>
        </View>
        <View style={{ paddingRight: 30, paddingTop: 10 }}>
          <AntDesign
            name="logout"
            size={25}
            color="white"
            onPress={() => {
              UserLogOut();
            }}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: 230,
          width: "95%",
          marginRight: 25,
          marginTop: 20,
          borderRadius: 40,
          borderColor:'#006A42',
          borderWidth:2,
          alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          marginLeft:5
        }}
      >
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View style={styles.item}>
            <MaterialIcons name="pest-control" size={40} color={"#a40000"} />
            <Button title="Pest Detect" color={"#a40000"} onPress={() => props.navigation.navigate("PestDashboard")}/>
          </View>
          <View style={styles.item}>
            <FontAwesome5 name="leaf" size={40} color={"#195905"} />
            <Button title="Disease Detect" color={"#195905"} onPress={() => props.navigation.navigate("DiseasesDashboard")}/>
          </View>
          <View style={styles.item}>
            <Entypo name="funnel" size={40} color={"#808000"} />
            <Button title="Harvest Predict" color={"#808000"} onPress={() => props.navigation.navigate("FertilizerDashboard")}/>
          </View>
          <View style={styles.item}>
            <FontAwesome name="line-chart" size={40} color={"#00008b"} />
            <Button title="Cost Predict" color={"#00008b"} onPress={() => props.navigation.navigate("CostDashboard")}/>
          </View>
        </View>
      </View>
      </Background>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 3,
    padding: 5,
    marginLeft:35,
    height: 100,
    width: 120,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    fontSize: 24,
    paddingTop: 10,
  },
});

export default Home;
