import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import HomeScreen from '../Home.Screen';
import LibraryScreen from '../Library.Screen';
import SearchScreen from '../Search.Screen';

const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
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
                // tabBarLabelStyle: {
                //     fontFamily: 'Arial', 
                //     fontSize: 10, 
                //     fontWeight: 'bold',
                // },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
            />
        </Tab.Navigator>
    );
}

export default BottomTabs;

// import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { BlurView } from 'expo-blur';
// import { StyleSheet, Image } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// import HomeNotFull from '../../Assets/home-not-full.png';
// import HomeFull from '../../Assets/home-full.png';
// import SearchNotFull from '../../Assets/search-not-full.png';
// import SearchFull from '../../Assets/search-full.png';
// // import LibraryNotFull from '../../Assets/library-not-full.png';
// // import LibraryFull from '../../Assets/library-full.png';

// import HomeScreen from '../Home.Screen';
// import LibraryScreen from '../Library.Screen';
// import SearchScreen from '../Search.Screen';

// const Tab = createMaterialBottomTabNavigator();

// const BottomTabs = () => {
//     return (
//         // <LinearGradient
//         //     colors={['rgba(0, 0, 0, 1)', 'transparent']}
//         //     style={styles.background}
//         // >
//             <Tab.Navigator
//                 initialRouteName="Home"
//                 activeColor="#ffffff"
//                 inactiveColor="#b3b3b3"
//                 shifting={false}
//                 barStyle={{ 
//                     backgroundColor: '#000000',
//                     paddingRight: 30,
//                     paddingLeft: 30,
//                 }}
//             >
//                 <Tab.Screen
//                     name="Home"
//                     component={HomeScreen}
//                     options={{
//                         tabBarLabel: 'Home',
//                         tabBarIcon: ({ focused }) => (
//                             <Image
//                                 source={focused ? HomeFull : HomeNotFull}
//                                 style={{ width: 25, height: 25 }}
//                             />
//                         ),
//                         tabBarColor: '#ff0000',
//                     }}
//                 />
//                 <Tab.Screen
//                     name="Search"
//                     component={SearchScreen}
//                     options={{
//                         tabBarLabel: 'Home',
//                         tabBarIcon: ({ focused }) => (
//                             <Image
//                                 source={focused ? SearchFull : SearchNotFull}
//                                 style={{ width: 25, height: 25 }}
//                             />
//                         ),
//                     }}
//                 />
//                 <Tab.Screen
//                     name="Your Library"
//                     component={LibraryScreen}
//                     options={{
//                         tabBarLabel: 'Home',
//                         tabBarIcon: ({ focused }) => (
//                             <Image
//                                 source={focused ? HomeFull : HomeNotFull}
//                                 style={{ width: 25, height: 25 }}
//                             />
//                         ),
//                     }}
//                 />
//             </Tab.Navigator>
//         // </LinearGradient>
//     );
// };

// const styles = StyleSheet.create({
//     // container: {
//     //     flex: 1,
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     //     backgroundColor: 'orange',
//     // },
//     background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         bottom: 0, // Start the gradient from the bottom
//         height: 500, // Height of the gradient
//     },
// });

// export default BottomTabs;