import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [uri, setUri] = useState("");
  const [location, setLocation] = useState(null);

  // Function to open image picker
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

  // Function to open the camera
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

  // Function to save the image to gallery
  const SaveFile = async () => {
    if (!uri) {
      alert("No image selected or captured");
      return;
    }

    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to save images to gallery is required!");
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      alert("Image saved to gallery!");
      console.log("Saved image asset:", asset);
    } catch (error) {
      console.error("Failed to save image:", error);
    }
  };

  // Function to get location
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required.');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation(currentLocation.coords);
      console.log('Location:', currentLocation);

      Alert.alert(
        'Location Captured',
        `Latitude: ${currentLocation.coords.latitude}, Longitude: ${currentLocation.coords.longitude}`
      );

      // Save location to file
      await saveLocationToFile(currentLocation.coords);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'An error occurred while fetching location.');
    }
  };

  // Function to save location to file
  const saveLocationToFile = async (coords) => {
    try {
      const locationData = `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}, Timestamp: ${new Date().toISOString()}\n`;

      if (Platform.OS === 'android') {
        const dirUri = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (!dirUri.granted) {
          Alert.alert('Permission Denied', 'You need to select a folder to save the file.');
          return;
        }

        const fileUri = `${dirUri.directoryUri}/location_data_${Date.now()}.txt`;

        await FileSystem.StorageAccessFramework.writeAsStringAsync(fileUri, locationData);

        console.log(`Location saved to: ${fileUri}`);
        Alert.alert('File Saved', `Location data saved to selected folder.`);
      } else {
        const fileUri = `${FileSystem.documentDirectory}location_data.txt`;
        await FileSystem.writeAsStringAsync(fileUri, locationData);

        console.log(`Location saved to: ${fileUri}`);
        Alert.alert('File Saved', `Location data saved to: ${fileUri}`);
      }
    } catch (error) {
      console.error('Error saving location to file:', error);
      Alert.alert('Error', 'Failed to save location data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocation and Image Picker App</Text>

      <TouchableOpacity style={styles.button} onPress={openImagePicker}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCameraLaunch}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={SaveFile}>
        <Text style={styles.buttonText}>Save File</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location & Save</Text>
      </TouchableOpacity>

      {uri && <Image source={{ uri }} style={styles.image} />}
      {location && (
        <Text style={styles.location}>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  location: {
    marginTop: 20,
    fontSize: 16,
  },
});