import * as React from 'react';
// import { Text, View, ScrollView, useState } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
// import app_styles from './App.styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash.Screen';
import HomeScreen from './Screens/Home.Screen';
// import { theme } from './Theme';

const Stack = createNativeStackNavigator();

export default function App() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  // const currentTheme = isDarkTheme ? theme.dark : theme.light;

  // const styles = stylesFunc(dark);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: true }} // Show header for home screen
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}