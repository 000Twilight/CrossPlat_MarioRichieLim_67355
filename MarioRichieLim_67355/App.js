import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './Components/BottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash.Screen';
import BPJSScreen from './Screens/Transaction/BPJS.Screen';
import PLNScreen from './Screens/Transaction/PLN.Screen';
import PulsaScreen from './Screens/Transaction/Pulsa.Screen';
import PaymentScreen from './Screens/Transaction/Payment.Screen';
import { AppContext, AppProvider } from './Contexts/App.Context';

const Stack = createNativeStackNavigator();

function AppContent() {
  const { fontsLoaded } = useContext(AppContext);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
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
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}