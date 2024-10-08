import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import CustomText from '../../Components/CustomText';
import BPJS_styles from '../../Styles/Transaction/BPJS.style';

const BPJSScreen = ({ navigation }) => {
  return (
    <View style={BPJS_styles.container}>
      <CustomText>This is BPJS Screen</CustomText>
    </View>
  );
};

export default BPJSScreen;