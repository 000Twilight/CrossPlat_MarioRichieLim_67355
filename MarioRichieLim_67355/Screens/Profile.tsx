import { Button, Text, View } from "react-native";
import React from "react";

const Profile = ({ navigation, route }) => {
    const { userName } = route.params;
    return (
        <View
        style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
            <Text>{userName}&apos;s Profile</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.navigate("UserList")}
            />
        </View>
    );
}

export default Profile;