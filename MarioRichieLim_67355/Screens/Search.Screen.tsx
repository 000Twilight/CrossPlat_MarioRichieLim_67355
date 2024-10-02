import React from 'react';
import { View, Text } from 'react-native';
import home_styles from '../Styles/HomeScreen.style';

const SearchScreen = () => {
  return (
    <View style={home_styles.container}>
      <Text style={home_styles.text}>This is the Search Screen</Text>
    </View>
  );
};

export default SearchScreen;