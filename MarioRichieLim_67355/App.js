import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [location, setLocation] = useState(null);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required to get the current location.');
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

      await saveLocationToFile(currentLocation.coords);
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'An error occurred while fetching location.');
    }
  };

  const saveLocationToFile = async (coords) => {
    try {
      const locationData = `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}, Timestamp: ${new Date().toISOString()}\n`;

      let fileUri;

      if (Platform.OS === 'android') {
        const externalDirectory = FileSystem.externalDirectory || FileSystem.documentDirectory;
        if (!externalDirectory) {
          throw new Error('External storage directory is not available.');
        }
        fileUri = `${externalDirectory}location_data.txt`;
      } else {
        fileUri = `${FileSystem.documentDirectory}location_data.txt`;
      }

      await FileSystem.writeAsStringAsync(fileUri, locationData, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      console.log(`Location saved to: ${fileUri}`);
      Alert.alert('Location Saved', `Location saved to: ${fileUri}`);
    } catch (error) {
      console.error('Error saving location to file:', error);
      Alert.alert('Error', 'Failed to save location data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocation App</Text>
      <Button title="Get Location" onPress={getLocation} />
      <StatusBar style="auto" />
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
  location: {
    marginTop: 20,
    fontSize: 16,
  },
});
