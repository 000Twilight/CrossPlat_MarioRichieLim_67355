import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
import CustomText from '../Components/CustomText';
import CategoryHeader from '../Components/CategoryHeader';
import QRCode from 'react-native-qrcode-svg';
import home_styles from '../Styles/Home.style';

const QrisScreen = ({ navigation }) => {
  const qrValue = 'https://github.com/000Twilight/CrossPlat_MarioRichieLim_67355/tree/UTS-LAB';

  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <CategoryHeader title="QRIS" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <QRCode
          value={qrValue}
          size={250}
          color="black"
          backgroundColor="white"
        />
        <CustomText style={{ marginTop: 20, fontFamily: 'Lato-Black', fontSize: 20 }}>QR Code Github</CustomText>
      </View>
    </View>
  );
};

export default QrisScreen;