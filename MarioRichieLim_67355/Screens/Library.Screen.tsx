import React from 'react';
import { View, Text } from 'react-native';
import home_styles from '../Styles/HomeScreen.style';

const LibraryScreen = () => {
  return (
    <View style={home_styles.container}>
      <Text style={home_styles.text}>This is the Home Screen</Text>
    </View>
  );
};

export default LibraryScreen;