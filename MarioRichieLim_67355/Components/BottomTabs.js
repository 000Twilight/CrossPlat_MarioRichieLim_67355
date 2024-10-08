import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import HomeScreen from '../Screens/Home.Screen';
import SearchStackNavigator from '../Navigation/SearchStackNavigation';
import LibraryStackNavigation from '../Navigation/LibraryStackNavigation';
import SongBar from './SongBar'; // Import the SongBar component

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <View style={styles.container}>
            <SongBar />
            <Tab.Navigator
                initialRouteName="BottomTabs"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? require('../Assets/home-full.png')
                                : require('../Assets/home-not-full.png');
                        } else if (route.name === 'Search') {
                            iconName = focused
                                ? require('../Assets/search-full.png')
                                : require('../Assets/search-not-full.png');
                        } else if (route.name === 'Library') {
                            iconName = focused
                                ? require('../Assets/library-full.png')
                                : require('../Assets/library-not-full.png');
                        }

                        return <Image source={iconName} style={{ width: 24, height: 24 }} />;
                    },
                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: '#b3b3b3',
                    tabBarActiveBackgroundColor: '#0d0d0d',
                    tabBarInactiveBackgroundColor: '#0d0d0d',
                    tabBarStyle: {
                        backgroundColor: '#0d0d0d',
                        paddingRight: 30,
                        paddingLeft: 30,
                        height: 60,
                        paddingBottom: 5,
                        paddingTop: 5,
                        borderColor: 'black',
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false, tabBarLabel: 'Home' }}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchStackNavigator}
                    options={{ headerShown: false, tabBarLabel: 'Search' }}
                />
                <Tab.Screen
                    name="Library"
                    component={LibraryStackNavigation}
                    options={{ headerShown: false, tabBarLabel: 'Your Library' }}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default BottomTabs;
