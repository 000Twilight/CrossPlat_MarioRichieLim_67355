import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import HomeNotFull from '../../Assets/home-not-full.png';
import HomeFull from '../../Assets/home-full.png';

import HomeScreen from '../Home.Screen';
import LibraryScreen from '../Library.Screen';
import SearchScreen from '../Search.Screen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
    return (
        <LinearGradient
            colors={['rgba(0, 0, 0, 1)', 'transparent']}
            style={styles.background}
        >
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#ffffff"
                inactiveColor="#b3b3b3"
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? HomeFull : HomeNotFull}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchScreen}
                />
                <Tab.Screen
                    name="Your Library"
                    component={LibraryScreen}
                />
            </Tab.Navigator>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'orange',
    // },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0, // Start the gradient from the bottom
        height: 500, // Height of the gradient
    },
});

export default BottomTabs;