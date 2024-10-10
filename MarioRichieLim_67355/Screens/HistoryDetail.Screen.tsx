import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import CustomText from '../Components/CustomText';
import historyDetail_styles from '../Styles/HistoryDetail.style';

const HistoryDetailScreen = ({ navigation }) => {
  return (
    <View style={historyDetail_styles.container}>
      <CustomText>This is History Detail Screen</CustomText>
    </View>
  );
};

export default HistoryDetailScreen;