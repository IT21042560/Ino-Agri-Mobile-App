import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState, useRef } from "react";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PestDashboard(props) {

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View>
        <ScrollView>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("../Screen/assets/pest_cover.png")}
          />

          <View style={{ paddingTop: 20 }}>
            <View style={{ justifyContent: "center" }}>
              <Text style={styles.subHedding}>The Most Common Pests</Text>
            </View>

            <View style={styles.imageGridContainer1}>
              <View style={styles.imageGridRow}>
                <View>
                  <Image
                    source={require("./assets/pest_1.png")}
                    style={{
                      width: 80,
                      height: 90,
                      marginLeft: 20,
                      marginRight: 0,
                    }}
                  />
                  <Text style={styles.gridText}>Aphids</Text>
                </View>

                <View>
                  <Image
                    source={require("./assets/pest_2.png")}
                    style={{
                      width: 80,
                      height: 90,
                      marginLeft: 30,
                      marginRight: 30,
                    }}
                  />
                  <Text style={styles.gridText}>Mites</Text>
                </View>
                <View>
                  <Image
                    source={require("./assets/pest_3.png")}
                    style={styles.image}
                  />
                  <Text style={{ color: "#6a859f", fontWeight: "bold" }}>
                    Catepiller
                  </Text>
                </View>
              </View>

              <View style={styles.imageGridRow}>
                <View>
                  <Image
                    source={require("./assets/pest_4.png")}
                    style={styles.image}
                  />
                  <Text
                    style={{
                      color: "#6a859f",
                      fontWeight: "bold",
                      marginLeft: 15,
                    }}
                  >
                    Thrips
                  </Text>
                </View>
                <View>
                  <Image
                    source={require("./assets/pest_5.png")}
                    style={styles.image}
                  />
                  <Text style={styles.gridText}>Whiteflies</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            
          </View>

          {/* <View style={{ paddingTop: 10 }}>
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
          </View> */}
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
