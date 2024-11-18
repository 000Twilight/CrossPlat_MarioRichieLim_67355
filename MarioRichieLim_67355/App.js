import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to get the current location.'
        );
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

      // Save location data to the Downloads folder
      await saveLocationToFile(currentLocation.coords);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'An error occurred while fetching location.');
    }
  };

  const saveLocationToFile = async (coords) => {
    try {
      const locationData = `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}, Timestamp: ${new Date().toISOString()}\n`;

      if (Platform.OS === 'android') {
        // Open a folder picker for the user to select a directory
        const dirUri = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (!dirUri.granted) {
          Alert.alert(
            'Permission Denied',
            'You need to select a folder to save the file.'
          );
          return;
        }

        const fileUri = `${dirUri.directoryUri}/location_data_${Date.now()}.txt`;

        // Write the data to the file
        await FileSystem.StorageAccessFramework.writeAsStringAsync(
          fileUri,
          locationData
        );

        console.log(`Location saved to: ${fileUri}`);
        Alert.alert('File Saved', `Location data saved to selected folder.`);
      } else {
        // For iOS, save to the app's document directory
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
      <Text style={styles.title}>Geolocation App</Text>
      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location & Save</Text>
      </TouchableOpacity>
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
  location: {
    marginTop: 20,
    fontSize: 16,
  },
});