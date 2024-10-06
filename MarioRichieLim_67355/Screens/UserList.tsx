import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../App.styles";  // Import your styles
import userData from "../data.json";  // Assuming this file contains user data
import React from "react";

const UserList = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {userData.map((user) => {
                return (
                    <View style={styles.userList} key={user.name}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Profile", { user })}  // Pass the whole user object
                        >
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: user.photo_url }}
                                />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.boldText}>{user.name}'s Profile</Text>
                                <Text>{user.email}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
}

export default UserList;
