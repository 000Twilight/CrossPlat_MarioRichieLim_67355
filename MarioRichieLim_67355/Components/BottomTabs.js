import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import HomeScreen from '../Screens/Home.Screen';
import PromoScreen from '../Screens/Promo.Screen';
import PaymentScreen from '../Screens/Payment.Screen';
import ProfileScreen from '../Screens/Profile.Screen';
import OnlineOrderScreen from '../Screens/OnlineOrder.Screen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#FFFFFF',
                tabBarStyle: {
                    backgroundColor: '#FFB001',
                    height: 70,
                    width: '90%',
                    borderRadius: 20,
                    position: 'absolute', 
                    left: '5%', // Center horizontally
                    right: '5%', // Center horizontally
                    bottom: '3%',
                    elevation: 10, // Adds shadow on Android
                    shadowColor: '#000', // Adds shadow on iOS
                    shadowOffset: { width: 0, height: -2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '400',
                    marginBottom: 10, // Moves label up for spacing
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarIcon: ({ focused }) => {
                    let icon;

                    if (route.name === 'Home') {
                        icon = (
                            <MaterialIcons name="home" size={24} color={focused ? '#FFFFFF' : '#FFFFFF'} />
                        );
                    } else if (route.name === 'Promo') {
                        icon = (
                            <FontAwesome name="percent" size={24} color={focused ? '#FFFFFF' : '#FFFFFF'} />
                        );
                    } else if (route.name === 'Payment') {
                        icon = (
                            <FontAwesome name="dollar" size={24} color={focused ? '#FFFFFF' : '#FFFFFF'} />
                        );
                    } else if (route.name === 'Profile') {
                        icon = (
                            <MaterialIcons name="person-outline" size={24} color={focused ? '#FFFFFF' : '#FFFFFF'} />
                        );
                    }
                    return icon;
                },
            })}
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
                component={OnlineOrderScreen}
                options={{ headerShown: false, tabBarLabel: 'Online' }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;