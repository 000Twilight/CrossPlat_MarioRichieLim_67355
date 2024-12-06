// import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './Components/BottomTabs';
import RestaurantNearYouScreen from './Screens/RestaurantNearYou.Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFB001" barStyle="light-content" />
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: { backgroundColor: '#FFB001' },
      //   headerTintColor: '#000000',
      // }}
      >
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RestaurantNearYou"
          component={RestaurantNearYouScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}