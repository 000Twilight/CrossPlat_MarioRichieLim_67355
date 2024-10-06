import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../App.styles";  // Assume you have a styles file

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.boldText}>Navigation List</Text>
      <Button
        title="Email"
        onPress={() => navigation.navigate("Email")}
      />
      <Button
        title="User List"
        onPress={() => navigation.navigate("UserList")}
      />
    </View>
  );
}

export default HomeScreen;