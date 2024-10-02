import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Home.Screen';
import LibraryScreen from '../Library.Screen';
import TestScreen from '../Test.Screen';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="+ Add account" component={TestScreen} />
      <Drawer.Screen name="? What's new" component={TestScreen} />
      <Drawer.Screen name="? Your Sound Capsule" component={TestScreen} />
      <Drawer.Screen name="? Listening History" component={TestScreen} />
      <Drawer.Screen name="? Settings and privacy" component={TestScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;