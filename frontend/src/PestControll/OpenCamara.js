import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
  } from "react-native";
  import React, { useState, useRef } from "react";
  import { CameraView, useCameraPermissions } from 'expo-camera';
  import * as MediaLibrary from 'expo-media-library';
  
  export default function OpenCamara(props) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [mediaLibraryPermission, requestMediaLibraryPermission] = MediaLibrary.usePermissions();
    const cameraRef = useRef(null);
  
    if (!permission || !mediaLibraryPermission) {
      // Camera permissions are still loading.
      return <View />;
    }
    if (!permission.granted || !mediaLibraryPermission.granted) {
      // Camera permissions are not granted yet.
      return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
          <Button onPress={() => {requestPermission(); requestMediaLibraryPermission();}} title="grant permission" />
        </View>
      );
    }
    function toggleCameraFacing() {
      setFacing(current => (current === 'back' ? 'front' : 'back'));
    }
  
    const takePicture = async () => {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        // Save the photo to the media library
        const asset = await MediaLibrary.createAssetAsync(photo.uri);
        Alert.alert('Photo Captured!', `Photo saved to library!\nURI: ${asset.uri}`);
  
        // Pass the photo to the backend
        const formData = new FormData();
        formData.append('photo', {
          uri: photo.uri,
          name: 'photo.jpg',
          type: 'image/jpeg',
        });
  
        try {
          const response = await fetch('YOUR_BACKEND_URL', {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (response.ok) {
            Alert.alert('Success', 'Photo uploaded successfully');
          } else {
            Alert.alert('Error', 'Failed to upload photo');
          }
        } catch (error) {
          Alert.alert('Error', `An error occurred: ${error.message}`);
        }
      }
    };
  
  
    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Take Picture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      flex: 1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });
  