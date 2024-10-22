import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import CustomText from '../../Components/CustomText';
import success_styles from '../../Styles/Transaction/Success.style';

const SuccessScreen = ({ navigation, route }) => {
    const { state, dispatch } = useContext(TransactionContext);
    const { isSuccess } = route.params;

    const message = isSuccess ? 'Pembelian Berhasil!' : 'Pembelian Berhasil (X)';

    const getRandomCardType = () => {
        const cardTypes = ['Debit', 'Credit', 'Cash', 'E-Wallet'];
        return cardTypes[Math.floor(Math.random() * cardTypes.length)];
    };

    useEffect(() => {
        dispatch({
            type: 'DEDUCT_SALDO',
            payload: state.selectedPrice,
        });

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: {
                price: state.selectedPrice,
                status: isSuccess ? 'Berhasil' : 'Gagal',
                cardType: getRandomCardType(),
                transactionType: state.transactionType,
                customerId: state.phoneNumber,
            },
        });

        dispatch({ type: 'SET_CUSTOMER_ID', payload: '' });
        dispatch({ type: 'SET_TRANSACTION_TYPE', payload: '' });

    }, [isSuccess, dispatch, state.selectedPrice]);

    return (
        <View style={[success_styles.container, success_styles.successBackground]}>
            <View style={success_styles.iconContainer}>
                <CustomText style={success_styles.title}>
                    {message}
                </CustomText>
                <Ionicons name="checkmark-circle" size={200} color="#F0F0F0" marginVertical={10} />
            </View>

            <View style={success_styles.detailsContainer}>
                <CustomText style={[success_styles.infoText, { fontSize: 18, marginBottom: 12 }]}>
                    Pembayaran sebesar
                </CustomText>
                <CustomText style={[success_styles.priceText, { fontSize: 48, lineHeight: 56, marginBottom: 10 }]}>
                    Rp {state.selectedPrice.toLocaleString('id-ID')}
                </CustomText>

                <CustomText style={[success_styles.infoText, { marginBottom: 6 }]}>
                    {new Date().toLocaleDateString('id-ID', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                    })}, {new Date().toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                    }).toUpperCase()}
                </CustomText>

                <CustomText style={[success_styles.infoText, { marginBottom: 20 }]}>
                    Saldo kamu sudah di tarik, sisa saldo {'\n'}
                    kamu sekarang Rp {state.saldo.toLocaleString('id-ID')}
                </CustomText>
            </View>

            <View style={success_styles.buttonContainer}>
                <TouchableOpacity
                    style={success_styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={success_styles.buttonText}>Tutup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[success_styles.button, success_styles.detailButton]}
                    onPress={() => navigation.navigate('History')}
                >
                    <Text style={[success_styles.buttonText, { color: '#F0F0F0' }]}>Lihat Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SuccessScreen;
