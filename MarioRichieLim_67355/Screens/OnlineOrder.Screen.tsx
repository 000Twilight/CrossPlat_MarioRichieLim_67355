import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import FeaturesCards from '../Components/FeaturesCard';
import online_order_styles from '../Styles/OnlineOrder.style';

import restaurants from '../Data/OnlineOrder.data';

const OnlineOrderScreen = () => {
    const categories = [
        { id: 1, title: 'Heavy Meal', image: require('../Assets/icon.png') },
        { id: 2, title: 'Snack', image: require('../Assets/icon.png') },
        { id: 3, title: 'Groceries', image: require('../Assets/icon.png') },
        { id: 4, title: 'Drink', image: require('../Assets/icon.png') },
        { id: 5, title: 'Vegetables', image: require('../Assets/icon.png') },
        { id: 6, title: 'Fruits', image: require('../Assets/icon.png') },
        { id: 7, title: 'Dessert', image: require('../Assets/icon.png') },
        { id: 8, title: 'Beverages', image: require('../Assets/icon.png') },
        { id: 9, title: 'Fast Food', image: require('../Assets/icon.png') },
        { id: 10, title: 'Seafood', image: require('../Assets/icon.png') },
    ];

    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <CustomHeader title="Online Order" />
            <View style={online_order_styles.paddingApp}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={online_order_styles.scrollContainerCategory}
                >
                    {categories.map((category) => (
                        <View key={category.id} style={online_order_styles.itemContainerCategory}>
                            <Image source={category.image} style={online_order_styles.imageCategory} />
                            <Text style={online_order_styles.textCategory}>{category.title}</Text>
                        </View>
                    ))}
                </ScrollView>

                <FeaturesCards />
            </View>
            <View style={online_order_styles.orderNowSection}>
                <Text style={online_order_styles.orderNowTitle}>Order Now</Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={online_order_styles.cardOrderNow}>
                        <Image
                            source={require('../Assets/icon.png')}
                            style={online_order_styles.imageOrderNow}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={online_order_styles.cardTitleOrderNow}>Salad Buah Murah, Cuma 10k</Text>
                            <Text style={online_order_styles.cardSubtitleOrderNow}>Ad - Salad Buah Eni</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={online_order_styles.paddingApp}>
                <Text style={online_order_styles.sectionTitle}>24 Hour</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={online_order_styles.scrollContainerRestaurants}
                >
                    {restaurants.map((restaurant) => (
                        <View key={restaurant.id} style={online_order_styles.cardRestaurants}>
                            <Image source={restaurant.image} style={online_order_styles.imageRestaurants} />
                            <View style={online_order_styles.contentRestaurants}>
                                <Text style={online_order_styles.titleRestaurants}>{restaurant.title}</Text>
                                <View style={online_order_styles.ratingContainerRestaurants}>
                                    {[...Array(5)].map((_, index) => (
                                        <Text key={index} style={online_order_styles.starRestaurants}>
                                            {index < Math.floor(restaurant.rating) ? '★' : '☆'}
                                        </Text>
                                    ))}
                                </View>
                                <Text style={online_order_styles.detailsRestaurants}>
                                    {restaurant.time} • {restaurant.distance}
                                </Text>
                                <View style={online_order_styles.tagContainerRestaurants}>
                                    {restaurant.tags.map((tag, index) => (
                                        <View key={index} style={online_order_styles.tagRestaurants}>
                                            <Text style={online_order_styles.tagTextRestaurants}>{tag}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={{ padding: 50 }}></View>
        </ScrollView>
    );
};

export default OnlineOrderScreen;