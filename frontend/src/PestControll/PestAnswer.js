import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import PestContext from "./content/index.js";

export default function PestAnswer() {
  const route = useRoute();
  const data = route.params;
  const predictedClass = data.res.inception_prediction.predicted_class;
  const objectType = data.res.yolo_prediction.object_type;
  console.log(data.res.inception_prediction.predicted_class);
  console.log(data.res.yolo_prediction.object_type);
  console.log(data.res);

  const [pestInfo, setPestInfo] = useState("");
  const [pestInfoYolo, setPestInfoYolo] = useState("");
  const [pestInfoIncep, setPestInfoIncep] = useState("");

  useEffect(() => {
    if (
      data.res.inception_prediction.predicted_class ===
      data.res.yolo_prediction.object_type
    ) {
      setPestInfo(
        PestContext.find(
          (pest) =>
            pest.pest_name === data.res.inception_prediction.predicted_class
        )
      );
    } else {
      setPestInfoYolo(
        PestContext.find(
          (pest) => pest.pest_name === data.res.yolo_prediction.object_type
        )
      );
      setPestInfoIncep(
        PestContext.find(
          (pest) =>
            pest.pest_name === data.res.inception_prediction.predicted_class
        )
      );
    }
  }, [predictedClass, objectType]);

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <View style={{ paddingBottom: 30 }}>
          <Image
            style={{ width: "100%", height: 180 }}
            source={require("../Screen/assets/pest_cover.png")}
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
                  name="bolt"
                  size={30}
                  color={"#33705b"}
                  style={{
                    padding: 10,
                  }}
                />
                <Text style={styles.subHedding}>
                  Pest Prediction & Solutions
                </Text>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                paddingBottom: 10,
              }}
            >
              <Text>Uploaded Image</Text>
            </View>
            <Image
              style={{
                width: "80%",
                height: 300,
                borderRadius: 30,
                alignSelf: "center",
              }}
              source={{ uri: data.imageUri }}
            />
            {data.res.inception_prediction.predicted_class ==
            data.res.yolo_prediction.object_type ? (
              <View style={{ paddingBottom: 60, paddingTop: 20 }}>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                  <Text style={styles.subHedding}>
                    {data.res.inception_prediction.predicted_class}
                  </Text>

                  <View
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      width: "80%",
                      paddingTop: 15,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                      }}
                    >
                      {pestInfo.description}
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <View style={{ paddingTop: 20, paddingBottom: 70 }}>
                <View style={{ justifyContent: "center", alignSelf: "center" }}>
                  <Text style={styles.subHedding}>Result</Text>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 10,
                  }}
                >
                  <Text style={styles.discrepancyText}>
                    The two models have provided different predictions. This
                    discrepancy can be due to the low quality of the input
                    image. We recommend retaking the image with better lighting
                    and focus to get more accurate results.
                  </Text>
                  <View style={{ paddingTop: 10 }}>
                    <Text>{pestInfoYolo.pest_name}</Text>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                        paddingVertical: 10,
                      }}
                    >
                      {pestInfoYolo.description}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "80%",
                    paddingTop: 10,
                  }}
                >
                  <Text style={styles.discrepancyText}>OR</Text>
                  <View style={{ paddingTop: 10 }}>
                    <Text>{pestInfoIncep.pest_name}</Text>
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: "justify",
                        letterSpacing: -0.5,
                        paddingVertical: 10,
                      }}
                    >
                      {pestInfoIncep.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
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
  discrepancyText: {
    fontSize: 12,
    color: "#d9534f",
    textAlign: "justify",
    letterSpacing: -0.8,
  },
});
