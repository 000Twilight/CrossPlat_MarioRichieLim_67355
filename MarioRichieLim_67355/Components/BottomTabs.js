import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../Screens/Home.Screen';
import History from '../Screens/History.Screen';
import QrisScreen from '../Screens/Qris.Screen';
import NotificationScreen from '../Screens/Notification.Screen';
import ProfileScreen from '../Screens/Profile.Screen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="BottomTabs"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('../Assets/home-full.png')
                            : require('../Assets/home-not-full.png');
                    } else if (route.name === 'History') {
                        iconName = focused
                            ? require('../Assets/search-full.png')
                            : require('../Assets/search-not-full.png');
                    } else if (route.name === 'QRIS') {
                        iconName = focused
                            ? require('../Assets/library-full.png')
                            : require('../Assets/library-not-full.png');
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? require('../Assets/profile-full.png')
                            : require('../Assets/profile-not-full.png');
                    } else if (route.name === 'Notification') {
                        iconName = focused
                            ? require('../Assets/notification-full.png')
                            : require('../Assets/notification-not-full.png');
                    }

                    return <Image source={iconName} style={{ width: 24, height: 24 }} />;
                },
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
                    borderColor: 'grey',
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false, tabBarLabel: 'Beranda' }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{ headerShown: false, tabBarLabel: 'Riwayat'  }}
            />
            <Tab.Screen
                name="QRIS"
                component={QrisScreen}
                options={{ headerShown: false, tabBarLabel: 'Bayar'  }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false, tabBarLabel: 'Notifikasi'  }}
            />
            <Tab.Screen
                name="Profile"
                component={{ProfileScreen}}
                options={{ headerShown: false, tabBarLabel: 'Profil'  }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;
