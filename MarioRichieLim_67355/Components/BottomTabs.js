import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Screens/Home.Screen';
import History from '../Screens/History.Screen';
import QrisScreen from '../Screens/Qris.Screen';
import NotificationScreen from '../Screens/Notification.Screen';
import ProfileScreen from '../Screens/Profile.Screen';

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import HistoryIconActive from '../Assets/BottomNavBar/History-active.png';
import HistoryIconInactive from '../Assets/BottomNavBar/History-inactive.png';
import QRISIconActive from '../Assets/BottomNavBar/QRIS-active.png';
import QRISIconInactive from '../Assets/BottomNavBar/QRIS-inactive.png';
import NotificationIconActive from '../Assets/BottomNavBar/Mail-active.png';
import NotificationIconInactive from '../Assets/BottomNavBar/Mail-inactive.png';
import ProfileIconActive from '../Assets/BottomNavBar/Profile-active.png';
import ProfileIconInactive from '../Assets/BottomNavBar/Profile-inactive.png';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="BottomTabs"
            screenOptions={() => ({
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#b3b3b3',
                tabBarActiveBackgroundColor: '#0d0d0d',
                tabBarInactiveBackgroundColor: '#0d0d0d',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    paddingRight: 10,
                    paddingLeft: 10,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarIcon: ({ focused, route }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = focused ? (
                            <FontAwesome6 name="house" size={24} color="#9B9B9B" />
                        ) : (
                            <FontAwesome6 name="house" size={24} color="#808080" />
                        );
                    } else if (route.name === 'History') {
                        icon = focused ? (
                            <Image source={HistoryIconActive} style={{ width: 24, height: 24 }} />
                        ) : (
                            <Image source={HistoryIconInactive} style={{ width: 24, height: 24 }} />
                        );
                    } else if (route.name === 'QRIS') {
                        icon = focused ? (
                            <Image source={QRISIconActive} style={{ width: 24, height: 24 }} />
                        ) : (
                            <Image source={QRISIconInactive} style={{ width: 24, height: 24 }} />
                        );
                    } else if (route.name === 'Notification') {
                        icon = focused ? (
                            <Image source={NotificationIconActive} style={{ width: 24, height: 24 }} />
                        ) : (
                            <Image source={NotificationIconInactive} style={{ width: 24, height: 24 }} />
                        );
                    } else if (route.name === 'Profile') {
                        icon = focused ? (
                            <Image source={ProfileIconActive} style={{ width: 24, height: 24 }} />
                        ) : (
                            <Image source={ProfileIconInactive} style={{ width: 24, height: 24 }} />
                        );
                    }
                    return icon;
                },
            })
            }
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false, tabBarLabel: 'Beranda' }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{ headerShown: false, tabBarLabel: 'Riwayat' }}
            />
            <Tab.Screen
                name="QRIS"
                component={QrisScreen}
                options={{ headerShown: false, tabBarLabel: 'Bayar' }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false, tabBarLabel: 'Notifikasi' }}
            />
            <Tab.Screen
                name="Profile"
                component={{ ProfileScreen }}
                options={{ headerShown: false, tabBarLabel: 'Profil' }}
            />
        </ Tab.Navigator >
    );
}

export default BottomTabs;
