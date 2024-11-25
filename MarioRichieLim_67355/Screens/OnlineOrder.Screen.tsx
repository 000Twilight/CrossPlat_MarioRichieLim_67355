import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../Components/CustomHeader';
import HorizontalScroll from '../Components/HorizontalScroll';

const OnlineOrderScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader title="Online Order" />
            <View style={styles.paddingApp}>
                <HorizontalScroll />
                <Text style={styles.sectionTitle}>Online Order</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    paddingApp: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
    },
});

export default OnlineOrderScreen;