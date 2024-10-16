import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from '../Screens/Home.Screen';
import HistoryScreen from '../Screens/History.Screen';
import QrisScreen from '../Screens/Qris.Screen';
import NotificationScreen from '../Screens/Notification.Screen';
import ProfileScreen from '../Screens/Profile.Screen';

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Qris from '../Assets/Qris.png';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="BottomTabs"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#2566A5',
                tabBarInactiveTintColor: '#8AB8E5',
                tabBarActiveBackgroundColor: '#F0F0F0',
                tabBarInactiveBackgroundColor: '#F0F0F0',
                tabBarStyle: {
                    backgroundColor: '#F0F0F0',
                    paddingRight: 10,
                    paddingLeft: 10,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarIcon: ({ focused }) => {
                    let icon;
                    const colorActive = '#2566A5';
                    const colorInActive = '#8AB8E5';

                    if (route.name === 'Home') {
                        icon = focused ? (
                            <FontAwesome6 name='house' size={24} color={colorActive} />
                        ) : (
                            <FontAwesome6 name='house' size={24} color={colorInActive} />
                        );
                    } else if (route.name === 'History') {
                        icon = focused ? (
                            <MaterialCommunityIcons name='file-clock' size={28} color={colorActive} />
                        ) : (
                            <MaterialCommunityIcons name='file-clock-outline' size={28} color={colorInActive} />
                        );
                    } else if (route.name === 'QRIS') {
                        icon = (
                            <View style={[styles.qrisContainer, { backgroundColor: focused ? colorActive : colorInActive }]}>
                                <Image source={Qris} style={styles.qrisImage} />
                            </View>
                        );
                    } else if (route.name === 'Notification') {
                        icon = focused ? (
                            <Ionicons name='notifications' size={28} color={colorActive} />
                        ) : (
                            <Ionicons name='notifications-outline' size={28} color={colorInActive} />
                        );
                    } else if (route.name === 'Profile') {
                        icon = focused ? (
                            <MaterialCommunityIcons name='account-circle' size={32} marginBottom={4} color={colorActive} />
                        ) : (
                            <MaterialCommunityIcons name='account-circle-outline' size={32} marginBottom={4} color={colorInActive} />
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
                component={HistoryScreen}
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
                component={ProfileScreen}
                options={{ headerShown: false, tabBarLabel: 'Profil' }}
            />
        </ Tab.Navigator >
    );
}

const styles = StyleSheet.create({
    qrisContainer: {
        width: 68,
        height: 65,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F0F0F0',
        borderWidth: 4,
        top: -15,
    },
    qrisImage: {
        width: 48,
        height: 48,
    },
});

export default BottomTabs;