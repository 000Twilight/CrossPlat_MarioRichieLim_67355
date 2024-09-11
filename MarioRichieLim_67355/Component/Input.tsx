import React from "react";
import { Button, View, TextInput, StyleSheet } from "react-native";

interface InputProps {
    handleInputWord: (text:string) => void;
    value: string;
    placeholder: string;
}

const Input = ({
    handleInputWord,
    value,
    placeholder,
}: InputProps) => {
    return (
        <View style={style.container}>
            <TextInput
                style={style.inputText}
                placeholder={placeholder}
                value={value}
                onChangeText={handleInputWord}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 20,
    },
    inputText: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 8,
        borderRadius: 4,
    }
});

export default Input;
