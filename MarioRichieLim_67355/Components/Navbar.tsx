import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="home" size={24} color="white" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <FontAwesome name="percent" size={24} color="white" />
                <Text style={styles.navText}>Promo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <FontAwesome name="dollar" size={24} color="white" />
                <Text style={styles.navText}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <MaterialIcons name="person-outline" size={24} color="white" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#F9A825', // Yellowish color
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10, // For shadow on Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
    },
});

export default Navbar;