import React from 'react';
import { View, Text } from 'react-native';
import search_styles from '../Styles/SearchScreen.style';

const SearchScreen = () => {
  return (
    <View style={search_styles.container}>
      <Text style={search_styles.text}>This is the Search Screen</Text>
    </View>
  );
};

export default SearchScreen;