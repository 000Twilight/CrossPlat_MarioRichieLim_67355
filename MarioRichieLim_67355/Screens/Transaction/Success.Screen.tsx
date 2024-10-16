import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import CustomText from '../../Components/CustomText';
import HistoryScreen from '../History.Screen';

const SuccessScreen = ({ navigation, route }) => {
    const { state, dispatch } = useContext(TransactionContext);
    const { isSuccess } = route.params;

    const message = isSuccess ? 'Pembelian Berhasil!' : 'Pembelian Berhasil (X)';

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
                cardType: 'Debit', 
                transactionType: state.selectedPackage ? 'Paket Data' : 'Pulsa', 
                phoneNumber: state.phoneNumber,
            },
        });

    }, [isSuccess, dispatch, state.selectedPrice]);

    return (
        <View style={[styles.container, styles.successBackground]}>
            <View style={styles.iconContainer}>
                <CustomText style={styles.title}>
                    {message}
                </CustomText>
                <Ionicons name="checkmark-circle" size={200} color="white" marginVertical={10} />
            </View>

            <View style={styles.detailsContainer}>
                <CustomText style={[styles.infoText, { fontSize: 18, marginBottom: 12 }]}>
                    Pembayaran sebesar
                </CustomText>
                <CustomText style={[styles.priceText, { fontSize: 48, lineHeight: 56, marginBottom: 10 }]}>
                    Rp {state.selectedPrice.toLocaleString('id-ID')}
                </CustomText>

                <CustomText style={[styles.infoText, { marginBottom: 6 }]}>
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

                <CustomText style={[styles.infoText, { marginBottom: 20 }]}>
                    Saldo kamu sudah di tarik, sisa saldo {'\n'}
                    kamu sekarang Rp {state.saldo.toLocaleString('id-ID')}
                </CustomText>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Tutup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.detailButton]}
                    onPress={() => navigation.navigate('HistoryScreen')}
                >
                    <Text style={styles.buttonText}>Lihat Detail</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    successBackground: {
        backgroundColor: '#007bff',
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        color: '#F8F9F9',
        marginBottom: 10,
    },
    infoText: {
        color: '#F8F9F9',
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
    },
    priceText: {
        color: '#F8F9F9',
        textAlign: 'center',
        fontFamily: 'Lato-Black',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#F8F9F9',
        borderRadius: 30,
        paddingVertical: 12,
        marginBottom: 10,
        width: '85%',
        alignItems: 'center',
    },
    detailButton: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 16,
    },
});

export default SuccessScreen;
