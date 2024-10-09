import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomText from '../../Components/CustomText';
import CategoryHeader from '../../Components/CategoryHeader';
import payment_styles from '../../Styles/Transaction/Payment.style';

import AntDesign from '@expo/vector-icons/AntDesign';

const PaymentScreen = ({ route, navigation }) => {
    const { selectedTopUp, phoneNumber } = route.params;

    return (
        <View style={payment_styles.container}>
            <CategoryHeader title='Konfirmasi Pembayaran' />

            <View style={payment_styles.contentContainer}>
                <View style={payment_styles.messageContainer}>
                    <AntDesign name="star" size={24} color="black" />
                    <View>
                        <CustomText>Telkomsel</CustomText>
                        <CustomText>{phoneNumber}</CustomText>
                    </View>
                    <CustomText>{selectedTopUp.price}</CustomText>
                </View>

                {/* <CustomText>Metode Pembayaran</CustomText>
                <View style={payment_styles.messageContainer}>
                    <CustomText>Saldo saya</CustomText>
                    <CustomText>Rp 900.000</CustomText>
                </View>

                <CustomText>Detail Pembayaran</CustomText>
                <View style={payment_styles.messageContainer}>
                    <CustomText>Harga Voucher</CustomText>
                    <CustomText>{selectedTopUp.price}</CustomText>
                </View>

                <View style={payment_styles.messageContainer}>
                    <CustomText>Biaya Transaksi</CustomText>
                    <CustomText>Rp 0</CustomText>
                </View>

                <View style={payment_styles.messageContainer}>
                    <CustomText>Total Pembayaran</CustomText>
                    <CustomText>{selectedTopUp.price}</CustomText>
                </View>

                <TouchableOpacity style={payment_styles.topUpBox} onPress={() => alert('Pembayaran Berhasil')}>
                    <CustomText style={payment_styles.activeTabText}>Konfirmasi</CustomText>
                </TouchableOpacity> */}
            </View>
        </View>
    );
};

export default PaymentScreen;