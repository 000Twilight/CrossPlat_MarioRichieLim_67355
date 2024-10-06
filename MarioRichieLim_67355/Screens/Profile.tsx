import React from "react";
import { View, Text, Image, Button } from "react-native";
import styles from "../App.styles";  // Import your styles

const Profile = ({ navigation, route }) => {
    const { user } = route.params;  // Get the user object from the route params

    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{ uri: user.photo_url }}
            />
            <Text style={styles.profileName}>{user.name}'s Profile</Text>
            <Text style={styles.profileEmail}>{user.email}</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default Profile;
