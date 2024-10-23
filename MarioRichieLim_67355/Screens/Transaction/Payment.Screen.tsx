import React, { useContext } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import CustomText from '../../Components/CustomText';
import CategoryHeader from '../../Components/CategoryHeader';
import payment_styles from '../../Styles/Transaction/Payment.style';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import AntDesign from '@expo/vector-icons/AntDesign';

const telkomsel = require('../../Assets/Provider/telkomsel.png');
const indosat = require('../../Assets/Provider/indosat.png');
const xl = require('../../Assets/Provider/xl.png');
const tri = require('../../Assets/Provider/tri.png');
const axis = require('../../Assets/Provider/axis.png');
const ListrikImage = require('../../Assets/Provider/PLN.png');
const BPJSImage = require('../../Assets/Provider/BPJS.png');

const PaymentScreen = ({ navigation }) => {
    const { state } = useContext(TransactionContext);
    const {
        // phoneNumber,
        // tokenId,
        // bpjsNumber,
        customerId,
        selectedPrice,
        selectedPackage,
        operator,
        saldo,
        transactionType,
    } = state;

    const validPrefixes = [
        '0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851', // Telkomsel
        '0814', '0815', '0816', '0855', '0856', '0857', '0858', // Indosat Ooredoo
        '0817', '0818', '0819', '0859', '0877', '0878', // XL Axiata
        '0895', '0896', '0897', '0898', '0899', // Three
        '0838', '0831', '0832', '0833' // Axis
    ];

    const getImage = () => {
        if (state.transactionType === 'Pulsa' || state.transactionType === 'Paket Data') {
            const prefix = state.customerId.substring(0, 4);
            if (validPrefixes.slice(0, 9).includes(prefix)) {
                return telkomsel;
            } else if (validPrefixes.slice(9, 16).includes(prefix)) {
                return indosat;
            } else if (validPrefixes.slice(16, 22).includes(prefix)) {
                return xl;
            } else if (validPrefixes.slice(22, 27).includes(prefix)) {
                return tri;
            } else if (validPrefixes.slice(27, 31).includes(prefix)) {
                return axis;
            }
        } else if (state.transactionType === 'Listrik') {
            return ListrikImage;
        } else if (state.transactionType === 'BPJS') {
            return BPJSImage;
        }
    };

    return (
        <View style={payment_styles.container}>
            <CategoryHeader title="Konfirmasi Pembayaran" />
            <View style={payment_styles.contentContainer}>
                <View style={payment_styles.topContainer}>
                    <View style={payment_styles.flexRow}>
                        <Image source={getImage()} style={payment_styles.image} />
                        <View style={payment_styles.infoContainer}>
                            <CustomText style={payment_styles.operatorText}>
                                {/* {tokenId ? 'PLN' : bpjsNumber ? 'BPJS' : operator} */}
                                {state.transactionType === 'Listrik' ? 'PLN' : state.transactionType === 'BPJS' ? 'BPJS' : state.operator}
                            </CustomText>
                            <CustomText style={payment_styles.phoneText}>
                                {/* {phoneNumber || tokenId || bpjsNumber} */}
                                {state.customerId}
                            </CustomText>
                        </View>
                    </View>
                    <CustomText style={payment_styles.priceText}>
                        Rp {selectedPrice.toLocaleString('id-ID')}
                    </CustomText>
                </View>

                <CustomText style={payment_styles.subTitle}>Metode Pembayaran</CustomText>
                <View style={payment_styles.detailContainer}>
                    <CustomText style={payment_styles.saldoText}>Saldo saya</CustomText>
                    <CustomText style={[payment_styles.saldoText, { fontFamily: 'Lato-Bold' }]}>
                        Rp {saldo.toLocaleString('id-ID')}
                    </CustomText>
                </View>

                <CustomText style={[payment_styles.subTitle, { marginTop: 10 }]}>
                    Detail Pembayaran
                </CustomText>
                <View style={payment_styles.detailContainer}>
                    <CustomText style={payment_styles.detailText}>
                        Paket {selectedPackage}
                    </CustomText>
                    <CustomText style={payment_styles.detailText2}>
                        Rp {selectedPrice.toLocaleString('id-ID')}
                    </CustomText>
                </View>
                <View style={[payment_styles.detailContainer, { marginTop: 4 }]}>
                    <CustomText style={payment_styles.detailText}>Biaya Admin</CustomText>
                    <CustomText style={payment_styles.detailText2}>Rp 0</CustomText>
                </View>

                <View
                    style={{ borderBottomColor: '#808080', borderBottomWidth: 1, marginVertical: 10 }}
                />

                <View style={payment_styles.detailContainer}>
                    <CustomText style={[payment_styles.detailText, { fontFamily: 'Lato-Bold' }]}>
                        Total Pembayaran
                    </CustomText>
                    <CustomText style={[payment_styles.detailText2, { fontFamily: 'Lato-Bold' }]}>
                        Rp {selectedPrice.toLocaleString('id-ID')}
                    </CustomText>
                </View>
            </View>

            <TouchableOpacity
                style={payment_styles.buttonConfirm}
                onPress={() => {
                    navigation.navigate('PIN');
                }}
            >
                <CustomText style={{ fontSize: 18, fontFamily: 'Lato-Bold', color: '#F0F0F0' }}>
                    Konfirmasi
                </CustomText>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentScreen;
