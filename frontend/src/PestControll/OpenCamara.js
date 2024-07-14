import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import Header from "../Screen/Header/Index";
import Footer from "../Screen/Footer/Index";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function OpenCamara(props) {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] =
    MediaLibrary.usePermissions();
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  const [pickedImage, setPickedImage] = useState(null);

  if (!permission || !mediaLibraryPermission) {
    // Camera permissions are still loading.
    return <View />;
  }
  if (!permission.granted || !mediaLibraryPermission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestPermission();
            requestMediaLibraryPermission();
          }}
          title="grant permission"
        />
      </View>
    );
  }
  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Save the photo to the media library
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      Alert.alert(
        "Photo Captured!",
        `Photo saved to library!\nURI: ${asset.uri}`
      );

      // Pass the photo to the backend
      const formData = new FormData();
      formData.append("image", {
        uri: photo.uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      try {
        const response = await fetch("http://192.168.1.4:5000/pest/predict", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          Alert.alert("Success", "Photo uploaded successfully");
          navigation.navigate("PestAnswer", {res: responseData,  imageUri: photo.uri})
        } else {
          Alert.alert("Error", "Failed to upload photo");
        }
      } catch (error) {
        Alert.alert("Error", `An error occurred: ${error.message}`);
      }
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      // Pass the photo to the backend
      const formData = new FormData();
      formData.append("image", {
        uri: result.assets[0].uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      try {
        const response = await fetch("http://192.168.1.4:5000/pest/predict", {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.ok) {
          const responseData = await response.json();
          Alert.alert("Success", "Photo uploaded successfully");
          navigation.navigate("PestAnswer", {res: responseData,  imageUri:result.assets[0].uri})
        } else {
          Alert.alert("Error", "Failed to upload photo");
        }
      } catch (error) {
        Alert.alert("Error", `An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <FontAwesome
                name="refresh"
                size={20}
                color={"white"}
                style={{
                  padding: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <FontAwesome
                name="camera"
                size={30}
                color={"white"}
                style={{
                  padding: 10,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <FontAwesome
                name="upload"
                size={20}
                color={"white"}
                style={{
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  mainContainer: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    paddingTop: 30,
  },
});
