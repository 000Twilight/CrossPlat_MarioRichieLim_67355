import React from 'react';
import { View, Text } from 'react-native';
import home_styles from '../Styles/HomeScreen.style';

const TestScreen = () => {
  return (
    <View style={home_styles.container}>
      <Text style={home_styles.text}>This is the Test Screen</Text>
    </View>
  );
};

export default TestScreen;