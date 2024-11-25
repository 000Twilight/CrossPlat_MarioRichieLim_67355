import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const FeaturesCards = () => {
    const features = [
        {
            id: 1,
            title: 'Open 24 Hours',
            description: 'Ready anytime',
            icon: <MaterialIcons name="access-time" size={24} color="green" />,
        },
        {
            id: 2,
            title: 'Fast Serve',
            description: 'Serve for u',
            icon: <MaterialIcons name="room-service" size={24} color="red" />,
        },
        {
            id: 3,
            title: 'Big Discount',
            description: 'Discount up to 50%',
            icon: <FontAwesome name="percent" size={24} color="blue" />,
        },
        {
            id: 4,
            title: 'Best Seller',
            description: 'Recommended',
            icon: <MaterialIcons name="restaurant" size={24} color="#FF9800" />,
        },
    ];

    return (
        <View style={styles.container}>
            {features.map((feature) => (
                <View key={feature.id} style={styles.card}>
                    <View style={styles.iconContainer}>{feature.icon}</View>
                    <View>
                        <Text style={styles.title}>{feature.title}</Text>
                        <Text style={styles.description}>{feature.description}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 8,
    },
    card: {
        width: '48%', 
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    iconContainer: {
        marginRight: 8,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        color: '#777',
    },
});

export default FeaturesCards;