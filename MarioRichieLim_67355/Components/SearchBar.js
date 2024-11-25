import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity style={styles.iconContainer}>
                <FontAwesome name="search" size={20} color="#FFB001" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        paddingHorizontal: 20,
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, // Android shadow
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    iconContainer: {
        marginLeft: 10,
    },
});

export default SearchBar;
