import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionContext } from '../Contexts/Transaction.Context';
import CustomText from '../Components/CustomText';
import CategoryHeader from '../Components/CategoryHeader';

const HistoryScreen = ({ navigation }) => {
    const { state } = useContext(TransactionContext);

    // Sort history by the newest transaction first
    const sortedHistory = state.transactionHistory.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Navigate to History Detail screen with selected transaction data
    const navigateToDetail = (transaction) => {
        navigation.navigate('HistoryDetail', { transaction });
    };

    return (
        <View style={styles.container}>
          <CategoryHeader title="Transaction History" />
            <FlatList
                data={sortedHistory}
                keyExtractor={(item) => item.traceNo}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigateToDetail(item)} style={styles.transactionItem}>
                        <CustomText style={styles.transactionText}>Transaction Type: {item.transactionType}</CustomText>
                        <CustomText style={styles.transactionText}>Price: {item.price}</CustomText>
                        <CustomText style={styles.transactionText}>Status: {item.status}</CustomText>
                        <CustomText style={styles.transactionText}>Date: {item.date}</CustomText>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    transactionItem: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        elevation: 2,
    },
    transactionText: {
        fontSize: 16,
    },
});

export default HistoryScreen;