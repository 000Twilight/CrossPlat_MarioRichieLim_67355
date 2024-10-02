import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SpotifyLogo from '../assets/spotify-logo.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HomeScreen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyApp</Text>
      <Image></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Customize splash screen background color
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default SplashScreen;
