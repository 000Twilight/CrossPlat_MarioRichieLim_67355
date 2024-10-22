import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../Contexts/Transaction.Context';
import CustomText from '../Components/CustomText';
import CategoryHeader from '../Components/CategoryHeader';

import history_styles from '../Styles/History.style';

const HistoryScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(TransactionContext);

    const sortedHistory = state.transactionHistory.slice().sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const isValidDate = (dateString) => {
        const date = new Date(dateString);
        return !isNaN(date.getTime());
    };

    const validHistory = sortedHistory.filter(transaction => isValidDate(transaction.date));

    const handleHistoryPress = (traceNo) => {
        dispatch({ type: 'SET_SELECTED_TRACE_NO', payload: traceNo });
        navigation.navigate('HistoryDetail');
    };

    return (
        <View style={history_styles.container}>
            <CategoryHeader title="Riwayat Transaksi" />
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <FlatList
                    data={validHistory}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.traceNo}
                    contentContainerStyle={{ paddingBottom: 50, paddingHorizontal: 10 }} 
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleHistoryPress(item.traceNo)} style={history_styles.transactionItem}>
                            <CustomText style={history_styles.transactionText}>Tipe Transaksi: {item.transactionType}</CustomText>
                            <CustomText style={history_styles.transactionText}>
                                Harga: Rp {item.price.toLocaleString('id-ID')}
                            </CustomText>
                            <CustomText style={history_styles.transactionText}>
                                Status:{' '}
                                <CustomText
                                    style={{
                                        color: item.status === 'Berhasil' ? 'green' : 'red',
                                        fontFamily: 'Lato-Bold',
                                    }}
                                >
                                    {item.status}
                                </CustomText>
                            </CustomText>
                            <CustomText style={history_styles.transactionText}>
                                Tanggal: {new Date(item.date).toLocaleString('en-US', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </CustomText>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

export default HistoryScreen;
