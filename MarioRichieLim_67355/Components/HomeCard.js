import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HomeCard = ({ item }) => {
  return (
    <View style={{ marginRight: 10, width: 160 }}> 
      <Image
        style={{ width: 160, height: 160 }}
        source={item.images[0].url}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: "900",
          color: "white",
          marginTop: 10,
        }}
        numberOfLines={1} 
      >
        {item?.name}
      </Text>
      <Text
        style={{
          fontSize: 13,
          fontWeight: "500",
          color: "#b3b3b3",
        }}
        numberOfLines={2} 
      >
        {item?.detail}
      </Text>
    </View>
  );
};

export default HomeCard;