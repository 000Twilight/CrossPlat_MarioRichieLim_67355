import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import home_styles from '../Styles/Home.style';
import CustomText from '../Components/CustomText';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={home_styles.container}>
      <CustomText>This is Notification Screen</CustomText>
    </View>
  );
};

export default NotificationScreen;