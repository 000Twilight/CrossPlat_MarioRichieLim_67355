import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const categories = [
    { id: 1, title: 'Heavy Meal', image: 'https://via.placeholder.com/100' },
    { id: 2, title: 'Snack', image: 'https://via.placeholder.com/100' },
    { id: 3, title: 'Groceries', image: 'https://via.placeholder.com/100' },
    { id: 4, title: 'Drink', image: 'https://via.placeholder.com/100' },
    { id: 5, title: 'Vegetables', image: 'https://via.placeholder.com/100' },
    { id: 6, title: 'Fruits', image: 'https://via.placeholder.com/100' },
    { id: 7, title: 'Dessert', image: 'https://via.placeholder.com/100' },
    { id: 8, title: 'Beverages', image: 'https://via.placeholder.com/100' },
    { id: 9, title: 'Fast Food', image: 'https://via.placeholder.com/100' },
    { id: 10, title: 'Seafood', image: 'https://via.placeholder.com/100' },
];

const HorizontalScroll = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
            {categories.map((category) => (
                <View key={category.id} style={styles.itemContainer}>
                    <Image source={{ uri: category.image }} style={styles.image} />
                    <Text style={styles.text}>{category.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    itemContainer: {
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    text: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
});

export default HorizontalScroll;