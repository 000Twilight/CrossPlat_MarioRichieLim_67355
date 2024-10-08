import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import home_styles from '../Styles/Home.style';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={home_styles.container}>
      <Text>This is Notification Screen</Text>
    </View>
  );
};

export default NotificationScreen;