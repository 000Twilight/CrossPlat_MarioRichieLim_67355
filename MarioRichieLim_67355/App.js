import * as React from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash.Screen';
import BottomTabs from './Components/BottomTabs';
import 'react-native-gesture-handler';
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Lato-Regular': require('./Assets/Lato/Lato-Regular.ttf'),
      'Lato-Italic': require('./Assets/Lato/Lato-Italic.ttf'),
      'Lato-Bold': require('./Assets/Lato/Lato-Bold.ttf'),
      'Lato-BoldItalic': require('./Assets/Lato/Lato-BoldItalic.ttf'),
      'Lato-Black': require('./Assets/Lato/Lato-Black.ttf'),
      'Lato-BlackItalic': require('./Assets/Lato/Lato-BlackItalic.ttf'),
      'Lato-Light': require('./Assets/Lato/Lato-Light.ttf'),
      'Lato-LightItalic': require('./Assets/Lato/Lato-LightItalic.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FFFFFF' },
          headerTintColor: '#000000',
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
          style={{ backgroundColor: '#FFFFFF' }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
          style={{ backgroundColor: '#FFFFFF' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
