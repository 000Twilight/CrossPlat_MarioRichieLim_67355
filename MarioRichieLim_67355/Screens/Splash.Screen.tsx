import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import splash_styles from '../Styles/Splash.style';

const SplashScreen = ({ navigation }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    // Start the scale animation
    scale.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });

    // Start the fade-out effect after the scaling animation
    opacity.value = withDelay(
      1000,
      withTiming(0, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      })
    );

    // Navigate to the main screen after the fade-out is complete
    const timeout = setTimeout(() => {
      navigation.replace('Main');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [scale, opacity, navigation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <View style={splash_styles.container}>
      <Animated.Image
        source={require('../Assets/UMN-Logo.png')}
        style={[splash_styles.logo, animatedStyle]}
      />
    </View>
  );
};

export default SplashScreen;