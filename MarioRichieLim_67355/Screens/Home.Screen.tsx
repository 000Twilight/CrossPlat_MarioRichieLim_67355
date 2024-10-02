import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavBar from './Components/BottomNavBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <BottomNavBar/>
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;