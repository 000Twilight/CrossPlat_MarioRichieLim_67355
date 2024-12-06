import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontEndScreen from './screens/FrontEnd.screen';
import BackEndScreen from './screens/BackEnd.screen';
import NumberScreen from './screens/Number.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <Stack.Navigator>
      <Stack.Screen
          name="Main"
          component={NumberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FrontEnd"
          component={FrontEndScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BackEnd"
          component={BackEndScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}