import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import HorizontalScroll from '../Components/HorizontalScroll';
import FeaturesCards from '../Components/FeaturesCard';
import online_order_styles from '../Styles/OnlineOrder.style';

const OnlineOrderScreen = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <CustomHeader title="Online Order" />
            <View style={online_order_styles.paddingApp}>
                <HorizontalScroll />
                <FeaturesCards />
            </View>
            <View style={online_order_styles.orderNowSection}>
                <Text style={online_order_styles.orderNowTitle}>Order Now</Text>
                <TouchableOpacity style={online_order_styles.cardOrder}>
                    <Image
                        source={require('../Assets/icon.png')}
                        style={online_order_styles.imageOrder}
                    />
                    <View style={online_order_styles.cardContent}>
                        <Text style={online_order_styles.cardTitle}>Salad Buah Murah, Cuma 10k</Text>
                        <Text style={online_order_styles.cardSubtitle}>Ad - Salad Buah Eni</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={online_order_styles.paddingApp}>
                <Text style={online_order_styles.sectionTitle}>24 Hour</Text>

            </View>

            <View style={online_order_styles.spaceDown}></View>
        </ScrollView>
    );
};

export default OnlineOrderScreen;