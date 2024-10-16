import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CustomText from '../../Components/CustomText';
import CategoryHeader from '../../Components/CategoryHeader';
import payment_styles from '../../Styles/Transaction/Payment.style';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import AntDesign from '@expo/vector-icons/AntDesign';

const PaymentScreen = ({ navigation }) => {
    const { state } = useContext(TransactionContext);
    const {
        phoneNumber,
        tokenId,
        bpjsNumber,
        selectedPrice,
        selectedPackage,
        operator,
        saldo,
    } = state;

    return (
        <View style={payment_styles.container}>
            <CategoryHeader title="Konfirmasi Pembayaran" />

            <View style={payment_styles.contentContainer}>
                <View style={payment_styles.topContainer}>
                    <View style={payment_styles.flexRow}>
                        <AntDesign name="star" size={30} color="black" />
                        <View style={payment_styles.infoContainer}>
                            <CustomText style={payment_styles.operatorText}>
                                {tokenId ? 'PLN' : bpjsNumber ? 'BPJS' : operator}
                            </CustomText>
                            <CustomText style={payment_styles.phoneText}>
                                {phoneNumber || tokenId || bpjsNumber}
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
                <CustomText style={{ fontSize: 18, fontFamily: 'Lato-Bold', color: 'white' }}>
                    Konfirmasi
                </CustomText>
            </TouchableOpacity>
        </View>
    );
};

export default PaymentScreen;
