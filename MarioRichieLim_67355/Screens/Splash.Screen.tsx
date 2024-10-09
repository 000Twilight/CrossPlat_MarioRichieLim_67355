import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import splash_styles from '../Styles/Splash.style';

const SplashScreen = ({ navigation }) => {
  const backgroundFade = useRef(new Animated.Value(0)).current;
  const logoFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(backgroundFade, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(logoFade, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(logoFade, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }).start(() => {
            Animated.timing(backgroundFade, {
              toValue: 0,
              duration: 700,
              useNativeDriver: true,
            }).start(() => {
              navigation.navigate('Main');
            });
          });
        }, 100);
      });
    });
  }, []);

  return (
    <Animated.View style={[splash_styles.container, { opacity: backgroundFade }]}>
      <Animated.Image
        style={[splash_styles.logo, { opacity: logoFade }]}
        source={require('../Assets/UMN-Logo.png')}
      />
    </Animated.View>
  );
};

export default SplashScreen;