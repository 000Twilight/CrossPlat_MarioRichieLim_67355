import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../Home.Screen";
import ProfileScreen from "../Profile.Screen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle:{
            backgroundColor:"rgba(0,0,0,0.5)",
            position: "absolute",
            bottom:0,
            left:0,
            right:0,
            shadowOpacity:4,
            shadowRadius:4,
            elevation:4,
            shadowOffset:{
                width:0,
                height:-4
            },
            borderTopWidth:0 
        }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
        //   tabBarIcon: ({ focused }) =>
        //     focused ? (
        //       <Entypo name="home" size={24} color="white" />
        //     ) : (
        //       <AntDesign name="home" size={24} color="white" />
        //     ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerShown: false,
          tabBarLabelStyle: { color: "white" },
        //   tabBarIcon: ({ focused }) =>
        //     focused ? (
        //         <Ionicons name="person" size={24} color="white" />
        //     ) : (
        //         <Ionicons name="person-outline" size={24} color="white" />
        //     ),
        }}
      />
    </Tab.Navigator>
  );
}


const BottomNavBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomNavBar;