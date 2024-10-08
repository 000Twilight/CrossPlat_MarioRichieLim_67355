import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import home_styles from '../Styles/Home.style';
import CustomText from '../Components/CustomText';

const ProfileScreen = ({  }) => {
  return (
    <View style={home_styles.container}>
      <CustomText>This is Profile Screen</CustomText>
    </View>
  );
};

export default ProfileScreen;