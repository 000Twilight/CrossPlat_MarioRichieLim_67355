import React from 'react';
import { View, Text } from 'react-native';
import library_styles from '../Styles/LibraryScreen.style';

const LibraryScreen = () => {
  return (
    <View style={library_styles.container}>
      <Text style={library_styles.text}>This is the Library Screen</Text>
    </View>
  );
};

export default LibraryScreen;