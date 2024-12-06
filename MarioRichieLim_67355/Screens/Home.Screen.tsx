import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: 'white', height: "100%" }}>
      <Text>Home</Text>
      <TouchableOpacity style={{ padding: 16, backgroundColor: "blue", margin: 16 }} onPress={() => navigation.navigate('RestaurantNearYou')}>
        <Text style={{ color: "white" }}>Go to Restaurant Near You</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;