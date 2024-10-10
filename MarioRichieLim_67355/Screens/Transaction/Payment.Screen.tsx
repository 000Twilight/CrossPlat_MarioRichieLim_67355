import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomText from '../../Components/CustomText';
import CategoryHeader from '../../Components/CategoryHeader';
import payment_styles from '../../Styles/Transaction/Payment.style';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import AntDesign from '@expo/vector-icons/AntDesign';

const PaymentScreen = ({ navigation }) => {
    const { state } = useContext(TransactionContext);
    const { phoneNumber, selectedPrice, selectedPackage, operator, saldo } = state;

    return (
        <View style={payment_styles.container}>
            <CategoryHeader title='Konfirmasi Pembayaran' />

            <View style={payment_styles.contentContainer}>
                <View style={payment_styles.messageContainer}>
                    <AntDesign name="star" size={24} color="black" />
                    <View>
                        <CustomText>operator : {operator}</CustomText>
                        <CustomText>phone number : {phoneNumber}</CustomText>
                        <CustomText>Package : {selectedPackage}</CustomText>
                    </View>
                    <CustomText>Rp {selectedPrice.toLocaleString('id-ID')}</CustomText>
                </View>

                <CustomText>Metode Pembayaran</CustomText>
                <View style={payment_styles.messageContainer}>
                    <CustomText>Saldo saya</CustomText>
                    <CustomText>Rp {saldo.toLocaleString('id-ID')}</CustomText>
                </View>

                <CustomText>Total Pembayaran Rp {selectedPrice.toLocaleString('id-ID')}</CustomText>

                <TouchableOpacity
                    style={{ padding: 10, backgroundColor: 'red' }}
                    onPress={() => {
                        navigation.navigate('PIN');
                    }}
                >
                    <CustomText>Konfirmasi</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PaymentScreen;
