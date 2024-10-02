import * as React from 'react';
import { Text, View, ScrollView, useState } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import data from './data.json';
import app_styles from './App.styles';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Email from './Screens/Email';
// import HomeScreen from './Screens/HomeScreen';
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
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Email" component={Email} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}