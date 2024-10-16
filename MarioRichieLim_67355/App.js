import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransactionProvider } from './Contexts/Transaction.Context';

import SplashScreen from './Screens/Splash.Screen';
import BottomTabs from './Components/BottomTabs';
import BPJSScreen from './Screens/Transaction/BPJS.Screen';
import PLNScreen from './Screens/Transaction/PLN.Screen';
import PulsaScreen from './Screens/Transaction/Pulsa.Screen';
import PaymentScreen from './Screens/Transaction/Payment.Screen';
import PinScreen from './Screens/Transaction/PIN.Screen';
import SuccessScreen from './Screens/Transaction/Success.Screen';
import HistoryDetailScreen from './Screens/HistoryDetail.Screen';
import HistoryScreen from './Screens/History.Screen';

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
    <TransactionProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#F8F9F9' },
            headerTintColor: '#000000',
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
            style={{ backgroundColor: '#F8F9F9' }}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{ headerShown: false }}
            style={{ backgroundColor: '#F8F9F9' }}
          />
          <Stack.Screen
            name="Pulsa"
            component={PulsaScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PLN"
            component={PLNScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BPJS"
            component={BPJSScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PIN"
            component={PinScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Success"
            component={SuccessScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HistoryDetail"
            component={HistoryDetailScreen}
            options={{ headerShown: false, title: 'Transaction Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
}
