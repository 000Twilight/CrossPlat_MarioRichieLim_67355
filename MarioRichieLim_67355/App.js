import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useState } from 'react';

export default function App() {
  const [uri, setUri] = useState("");

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (pickerResult.assets && pickerResult.assets.length > 0) {
      setUri(pickerResult.assets[0].uri);
      console.log("Image URI from gallery:", pickerResult.assets[0].uri);
    } else {
      console.log("User cancelled image picker or URI is undefined");
    }
  };

  const handleCameraLaunch = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (cameraResult.assets && cameraResult.assets.length > 0) {
      setUri(cameraResult.assets[0].uri);
      console.log("Image URI from camera:", cameraResult.assets[0].uri);
    } else {
      console.log("User cancelled camera or URI is undefined");
    }
  };

  // Function to save the image to the gallery using MediaLibrary
  const SaveFile = async () => {
    if (!uri) {
      alert("No image selected or captured");
      return;
    }

    try {
      // Request permission to save to gallery if not already granted
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to save images to gallery is required!");
        return;
      }

      // Save the image to the gallery
      const asset = await MediaLibrary.createAssetAsync(uri);
      alert("Image saved to gallery!");
      console.log("Saved image asset:", asset);
    } catch (error) {
      console.error("Failed to save image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Mario Richie Lim - 00000067355</Text>
      <TouchableOpacity style={styles.button} onPress={openImagePicker}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCameraLaunch}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={SaveFile}>
        <Text style={styles.buttonText}>Save File</Text>
      </TouchableOpacity>
      {uri ? <Image source={{ uri }} style={styles.image} key={uri} /> : null}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});