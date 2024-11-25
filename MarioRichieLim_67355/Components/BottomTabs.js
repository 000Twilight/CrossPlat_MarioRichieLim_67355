import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home.Screen';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="BottomTabs"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarActiveBackgroundColor: '#FFB001',
                tabBarInactiveBackgroundColor: '#FFB001',
                tabBarStyle: {
                    backgroundColor: '#FFB001',
                    paddingRight: 10,
                    paddingLeft: 10,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarIcon: ({ focused }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = focused ? (
                            <MaterialIcons name="home" size={24} color="white" />
                        ) : (
                            <MaterialIcons name="home" size={24} color="white" />
                        );
                    } else if (route.name === 'Promo') {
                        icon = focused ? (
                            <FontAwesome name="percent" size={24} color="white" />
                        ) : (
                            <FontAwesome name="percent" size={24} color="white" />
                        );
                    } else if (route.name === 'Payment') {
                        icon = focused ? (
                            <FontAwesome name="dollar" size={24} color="white" />
                        ) : (
                            <FontAwesome name="dollar" size={24} color="white" />
                        );
                    } else if (route.name === 'Profile') {
                        icon = focused ? (
                            <MaterialIcons name="person-outline" size={24} color="white" />
                        ) : (
                            <MaterialIcons name="person-outline" size={24} color="white" />
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
                options={{ headerShown: false, tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Promo"
                component={PromoScreen}
                options={{ headerShown: false, tabBarLabel: 'Promo' }}
            />
            <Tab.Screen
                name="Payment"
                component={PaymentScreen}
                options={{ headerShown: false, tabBarLabel: 'Payment' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false, tabBarLabel: 'Profile' }}
            />
        </ Tab.Navigator >
    );
}

export default BottomTabs;