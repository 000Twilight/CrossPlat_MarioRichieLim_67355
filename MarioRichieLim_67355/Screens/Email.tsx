import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import styles from "../App.styles"; 
import userData from "../data.json"; 

const Email = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.boldText}>Email List</Text>
            {userData.map((user) => {
                return (
                    <TouchableOpacity
                        key={user.email}
                        style={styles.emailListItem}
                        onPress={() => navigation.navigate("Profile", { user })}  
                    >
                        <Text style={styles.profileEmail}>{user.email}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}

export default Email;
