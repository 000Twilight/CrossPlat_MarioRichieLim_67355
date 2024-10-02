import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestScreen from '../Test.Screen';
import { Text, TouchableOpacity, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import HomeScreen from '../Home.Screen';

const Drawer = createDrawerNavigator();

const SideBar = () => {
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerType: 'front',
                headerShown: true,
                drawerStyle: {
                    backgroundColor: '#b5b5b5',
                    width: 240,
                },
                drawerLabelStyle: {
                    color: '#ffffff',
                },
                drawerPosition: 'left',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image source={require('../../Assets/spotify-logo.png')} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                ),
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="+ Add account" component={TestScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="? What's new" component={TestScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="? Your Sound Capsule" component={TestScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="? Listening History" component={TestScreen} options={{ headerShown: false }} />
            <Drawer.Screen name="? Settings and privacy" component={TestScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default SideBar;