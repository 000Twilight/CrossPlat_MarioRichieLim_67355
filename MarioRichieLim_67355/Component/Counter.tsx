import React from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";

interface ICounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    handleSubmitForm: () => void;
    value: number;
}

const Counter = ({
    handleDecrement,
    handleIncrement,
    handleSubmitForm,
    value,
}: ICounter) => {
    return (
        <View style={style.container}>
            {value}
            <TouchableOpacity style={style.buttonStyle} onPress={handleIncrement}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle} onPress={handleDecrement}>
                <Text>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonStyle} onPress={handleSubmitForm}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginBottom: 5,
        marginTop: 5,
    },
    buttonStyle: {
        height: 40,
        width: 100,
        backgroundColor: 'cyan',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    }
});

export default Counter;