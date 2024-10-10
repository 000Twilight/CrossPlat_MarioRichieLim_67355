import React from "react";
import { ScrollView, View, TouchableOpacity, Image, Text } from "react-native";
import styles from "../App.styles"; // Import your styles
import userData from "../data.json"; // Assuming this file contains user data
import Animated, {
    SlideInLeft,
    SlideInRight,
    SlideInDown,
} from "react-native-reanimated";

const UserList = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {userData.map((user, index) => {
                // Alternate between animations for a dynamic effect
                const animation = index % 3 === 0
                    ? SlideInLeft
                    : index % 3 === 1
                        ? SlideInRight
                        : SlideInDown;

                return (
                    <Animated.View
                        key={user.name}
                        style={styles.userList}
                        entering={animation.delay(index * 100).duration(500)}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Profile", { user })} // Pass the whole user object
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
                    </Animated.View>
                );
            })}
        </ScrollView>
    );
};

export default UserList;
