import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { AppContext } from '../contexts/AppContext';
import { useNavigation } from '@react-navigation/native';

const CategoryHeader = ({ title }) => {
    const navigation = useNavigation();
    const { someValue } = useContext(AppContext);

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Octicons name="chevron-left" size={28} marginLeft={8} color="black" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Text>{someValue}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        paddingHorizontal: 10,
    },
    backButton: {
        position: 'absolute',
        left: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: 'Lato-Black',
    },
});

export default CategoryHeader;
