import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import home_styles from '../Styles/Home.style';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={home_styles.container}>
      <Text>This is Home Screen</Text>
    </View>
  );
};

export default HomeScreen;