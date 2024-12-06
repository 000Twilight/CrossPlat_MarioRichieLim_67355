import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navLinks}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Franchise</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Feedback</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.navLinks}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>hello@email.com</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>0800 022 2 022</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeeeee',
        width: '100%',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 208,
        paddingVertical: 10,
    },
    navLinks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 12,
    },
    navText: {
        paddingLeft: 12,
        fontSize: 14,
        fontWeight: 'semibold',
    },
});

export default Navbar;