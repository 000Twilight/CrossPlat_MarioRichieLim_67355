import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import PLN_styles from '../../Styles/Transaction/PLN.style';
import CustomText from '../../Components/CustomText';

const PLNScreen = ({ navigation }) => {
  return (
    <View style={PLN_styles.container}>
      <CustomText>This is Notification Screen</CustomText>
    </View>
  );
};

export default PLNScreen;