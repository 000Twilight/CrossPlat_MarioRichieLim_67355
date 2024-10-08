import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import pulsa_styles from '../../Styles/Transaction/Pulsa.style';
import CustomText from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PulsaScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedTab, setSelectedTab] = useState('Isi Pulsa');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

    const topUpOptions = [
        { amount: '5.000', price: 'Rp 6.500' },
        { amount: '10.000', price: 'Rp 11.500' },
        { amount: '15.000', price: 'Rp 16.500' },
        { amount: '20.000', price: 'Rp 21.500' },
        { amount: '25.000', price: 'Rp 26.500' },
        { amount: '30.000', price: 'Rp 31.500' },
        { amount: '40.000', price: 'Rp 41.500' },
        { amount: '50.000', price: 'Rp 51.500' },
        { amount: '75.000', price: 'Rp 76.500' },
        { amount: '100.000', price: 'Rp 101.500' },
    ];

    const validatePhoneNumber = (number) => {
        setErrorMessage('');

        if (!number.startsWith('08')) {
            setErrorMessage('Nomor harus dimulai dengan 08');
            setIsPhoneNumberValid(false);
            return false;
        }

        if (number.length > 13) {
            setErrorMessage('Nomor telepon tidak boleh lebih dari 13 digit');
            setIsPhoneNumberValid(false);
            return false;
        }

        const validPrefixes = [
            '0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851', // Telkomsel
            '0814', '0815', '0816', '0855', '0856', '0857', '0858', // Indosat Ooredoo
            '0817', '0818', '0819', '0859', '0877', '0878', // XL Axiata
            '0895', '0896', '0897', '0898', '0899', // Three
            '0838', '0831', '0832', '0833' // Axis
        ];

        if (!validPrefixes.some(prefix => number.startsWith(prefix))) {
            setErrorMessage('Nomor tidak sesuai dengan operator resmi di Indonesia');
            setIsPhoneNumberValid(false);
            return false;
        }

        setIsPhoneNumberValid(true);
        return true;
    };

    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number);
        validatePhoneNumber(number);
    };

    const renderTopUpOption = ({ item }) => (
        <View style={pulsa_styles.topUpBox}>
            <CustomText style={pulsa_styles.topUpAmount}>{item.amount}</CustomText>
            <CustomText style={pulsa_styles.topUpPrice}>Harga {item.price}</CustomText>
        </View>
    );

    return (
        <View style={pulsa_styles.container}>
            <CustomText style={pulsa_styles.title}>Pulsa & Paket Data</CustomText>

            <View style={pulsa_styles.inputContainer}>
                <CustomText style={pulsa_styles.label}>Nomor Ponsel</CustomText>
                <View style={pulsa_styles.inputWrapper}>
                    <TextInput
                        style={pulsa_styles.textInput}
                        placeholder="Contoh : 082370323318"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={handlePhoneNumberChange}
                    />
                    {phoneNumber.length > 0 && (
                        <TouchableOpacity onPress={() => setPhoneNumber('')}>
                            {/* <Image source={require('../../Assets/ClearIcon.png')} style={pulsa_styles.inputIcon} /> */}
                            <Icon name="close" size={24} style={pulsa_styles.inputIcon} />
                        </TouchableOpacity>
                    )}
                </View>
                {errorMessage !== '' && <CustomText style={pulsa_styles.errorText}>{errorMessage}</CustomText>}
            </View>

            <View style={pulsa_styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        pulsa_styles.tabButton,
                        selectedTab === 'Isi Pulsa' && pulsa_styles.activeTab,
                    ]}
                    onPress={() => setSelectedTab('Isi Pulsa')}
                >
                    <CustomText style={selectedTab === 'Isi Pulsa' ? pulsa_styles.activeTabText : pulsa_styles.inactiveTabText}>
                        Isi Pulsa
                    </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        pulsa_styles.tabButton,
                        selectedTab === 'Paket Data' && pulsa_styles.activeTab,
                    ]}
                    onPress={() => setSelectedTab('Paket Data')}
                >
                    <CustomText style={selectedTab === 'Paket Data' ? pulsa_styles.activeTabText : pulsa_styles.inactiveTabText}>
                        Paket Data
                    </CustomText>
                </TouchableOpacity>
            </View>

            {isPhoneNumberValid ? (
                <FlatList
                    data={topUpOptions}
                    renderItem={renderTopUpOption}
                    keyExtractor={(item) => item.amount}
                    numColumns={2}
                    columnWrapperStyle={pulsa_styles.topUpRow}
                />
            ) : (
                <View style={pulsa_styles.messageContainer}>
                    {/* <Image source={require('../../Assets/InfoIcon.png')} style={pulsa_styles.messageIcon} /> */}
                    <Icon name="info" size={24} style={pulsa_styles.messageIcon} />
                    <CustomText style={pulsa_styles.messageText}>
                        Isi nomor ponsel yang valid untuk menampilkan menu pembelian.
                    </CustomText>
                </View>
            )}
        </View>
    );
};

export default PulsaScreen;
