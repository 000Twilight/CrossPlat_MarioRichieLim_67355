import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import SideBar from './SideBar';
import LibraryScreen from '../Library.Screen';
import SearchScreen from '../Search.Screen';
import HomeScreen from '../Home.Screen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="SideBar"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'SideBar') {
                        iconName = focused
                            ? require('../../Assets/home-full.png')
                            : require('../../Assets/home-not-full.png');
                    } else if (route.name === 'Search') {
                        iconName = focused
                            ? require('../../Assets/search-full.png')
                            : require('../../Assets/search-not-full.png');
                    } else if (route.name === 'Library') {
                        iconName = focused
                            ? require('../../Assets/library-full.png')
                            : require('../../Assets/library-not-full.png');
                    }

                    return <Image source={iconName} style={{ width: 24, height: 24 }} />;
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#b3b3b3',
                tabBarActiveBackgroundColor: 'transparent',
                tabBarInactiveBackgroundColor: '#000000',
                tabBarStyle: {
                    backgroundColor: '#000000',
                    paddingRight: 30,
                    paddingLeft: 30,
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            })}
        >
            <Tab.Screen
                name="SideBar"
                component={SideBar}
                options={{ headerShown: false, tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;