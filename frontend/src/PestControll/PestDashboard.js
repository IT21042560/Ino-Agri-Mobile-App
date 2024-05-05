import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import Background from "../LoginAndSignup/Background";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function PestDashboard(props) {
  const [hasCamaraPermission, setHasCamaraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const camaraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const camaraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCamaraPermission(camaraStatus.canAskAgain.status === "granted");
    })();
  }, []);

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        Alert.alert(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    }
  };

  const takePicture = async () => {
    if (camaraRef) {
      try {
        const data = await camaraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCamaraPermission === true) {
    return <Text>No access to camera</Text>;
  }

  const pickImage = async () => {
    await getPermissionAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 12],
      quality: 1,
    });

    if (result.canceled) {
      setImage(result.uri);
      // Now send this image to your backend
      // You can use fetch or any HTTP client to send the image to your Flask backend

      // Convert the local image URI to a blob
      console.log("Image selection cancelled");
      return;
    }

    if (!result.uri) {
      // Handle the case where result.uri is undefined
      console.error("Image URI is undefined");
      return;
    }

    // Proceed with further operations
    setImage(result.uri);

    const localUri = result.uri;
    const filename = localUri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    formData.append("file", { uri: localUri, name: filename, type });

    axios
      .post("http://192.168.1.101:5000/upload", formData)
      .then(() => {
        console.log("giya");
      })
      .catch((err) => {
        console.log("err");
      });
  };

  const saveImgae = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        const myPestImg = new FormData();
        myPestImg.append("image", image);
        console.log(myPestImg);
        axios
          .post("http://192.168.1.101:5000/pest/try", myPestImg, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log("Giya");
          })
          .catch((e) => {
            console.log("error");
          });
        alert("picture Save!");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const downloadImage = () => {
    if (image) {
      // Linking library helps to open the URL on the browser
      Linking.openURL(image);
    }
  };

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
            Pest Control
          </Text>
        </View>
        <View style={{ paddingRight: 30, paddingTop: 10 }}>
          <AntDesign name="back" size={25} color="white" onPress={() => props.navigation.navigate("Home")}/>
        </View>
      </View>

      {!image ? (
        <View style={{ marginLeft: 12, paddingTop: 10 }}>
          <Camera
            style={styles.camara}
            type={type}
            flashMode={flash}
            ref={camaraRef}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
              }}
            >
              <Button
                icon={"retweet"}
                onpress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              />
              <Button
                icon={"flash"}
                color={
                  flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
                }
                onpress={() => {
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  );
                }}
              />
            </View>
          </Camera>
        </View>
      ) : (
        <View style={{ marginLeft: 10 }}>
          <Image source={{ uri: image }} style={styles.camara} />
        </View>
      )}
      {image ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 50,
          }}
        >
          <Button
            title={"Re-Take"}
            icon="retweet"
            onpress={() => setImage(null)}
          />
          <Button title={"Save"} icon="check" onpress={saveImgae} />
          <Button title="Download" icon="download" onPress={downloadImage} />
        </View>
      ) : (
        <Button title={"Take a picture"} icon="camera" onpress={takePicture} />
      )}

      <View style={{ marginLeft: 60 }}>
        <Button
          title={"Pick an image from camera roll"}
          onpress={pickImage}
          color={"white"}
          icon={"picasa"}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  camara: {
    height: 400,
    width: 350,
  },
});
