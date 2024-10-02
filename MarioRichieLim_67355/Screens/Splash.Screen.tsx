import React, { useEffect, useRef } from 'react';
import { View, Image, Animated } from 'react-native';
import splash_styles from '../Styles/Splash.style'; 

const SplashScreen = ({ navigation }) => {
  const backgroundFade = useRef(new Animated.Value(0)).current;
  const logoFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Step 1: Fade in the background
    Animated.timing(backgroundFade, {
      toValue: 1, // Fade in background to opacity 1
      duration: 100, 
      useNativeDriver: true,
    }).start(() => {
      // Step 2: After background fades in, fade in the logo
      Animated.timing(logoFade, {
        toValue: 1, // Fade in logo to opacity 1
        duration: 300, 
        useNativeDriver: true,
      }).start(() => {
        // Step 3: Fade out the logo after delay
        setTimeout(() => {
          Animated.timing(logoFade, {
            toValue: 0, // Fade out logo to opacity 0
            duration: 400, 
            useNativeDriver: true,
          }).start(() => {
            // Step 4: Fade out the background after logo fade out
            Animated.timing(backgroundFade, {
              toValue: 0, // Fade out background to opacity 0
              duration: 450, 
              useNativeDriver: true,
            }).start(() => {
              navigation.replace('Main');
            });
          });
        }, 600);
      });
    });
  }, []);

  return (
    <Animated.View style={[splash_styles.container, { opacity: backgroundFade }]}>
      <Animated.Image
        style={[splash_styles.logo, { opacity: logoFade }]}
        source={require('../Assets/spotify-logo.png')}
      />
    </Animated.View>
  );
};

export default SplashScreen;