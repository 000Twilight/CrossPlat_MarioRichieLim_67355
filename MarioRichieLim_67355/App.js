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
import { storage, firestore } from './Firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

export default function App() {
  const [uri, setUri] = useState('');
  const [location, setLocation] = useState(null);

  // Function to open image picker
  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (pickerResult.assets && pickerResult.assets.length > 0) {
      setUri(pickerResult.assets[0].uri);
      console.log('Image URI from gallery:', pickerResult.assets[0].uri);
    } else {
      console.log('User cancelled image picker or URI is undefined');
    }
  };

  // Function to open the camera
  const handleCameraLaunch = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }

    const cameraResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (cameraResult.assets && cameraResult.assets.length > 0) {
      setUri(cameraResult.assets[0].uri);
      console.log('Image URI from camera:', cameraResult.assets[0].uri);
    } else {
      console.log('User cancelled camera or URI is undefined');
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
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'An error occurred while fetching location.');
    }
  };

  // Function to upload image to Firebase Storage
  const uploadImageToFirebase = async () => {
    if (!uri) {
      alert('No image selected');
      return;
    }

    const imageUri = uri;
    const imageName = `image_${Date.now()}.jpg`;
    const storageRef = ref(storage, `images/${imageName}`);

    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      await uploadBytes(storageRef, blob);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log('Image uploaded successfully:', downloadUrl);
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Failed to upload image.');
    }
  };

  // Function to save data to Firestore
  const saveDataToFirestore = async () => {
    if (!uri || !location) {
      Alert.alert('Missing Data', 'Please select an image and capture your location first.');
      return;
    }

    const downloadUrl = await uploadImageToFirebase();

    if (downloadUrl) {
      const data = {
        imageUri: downloadUrl,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        timestamp: new Date().toISOString(),
      };

      try {
        // Save data to Firestore
        await addDoc(collection(firestore, 'image_location_data'), data);
        Alert.alert('Data Saved', 'Image and location data saved to Firestore');
        console.log('Data saved:', data);
      } catch (error) {
        console.error('Error saving data to Firestore:', error);
        Alert.alert('Error', 'Failed to save data.');
      }
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

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={saveDataToFirestore}>
        <Text style={styles.buttonText}>Save Image & Location</Text>
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