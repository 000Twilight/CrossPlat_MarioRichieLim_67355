import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ onBackPress }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBackPress} style={styles.icon}>
                <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Mario Richie Lim - 00000067355</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        flexDirection: 'row',
        marginBottom: 20,
    },
    icon: {
        position: 'absolute',
        left: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CustomHeader;