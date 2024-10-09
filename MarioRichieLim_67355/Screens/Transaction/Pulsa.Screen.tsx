import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import pulsa_styles from '../../Styles/Transaction/Pulsa.style';
import CustomText from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryHeader from '../../Components/CategoryHeader';

const PulsaScreen = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedTab, setSelectedTab] = useState('Isi Pulsa');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

    const priceOptions = [
        { price: 6500 }, { price: 11500 },
        { price: 16500 }, { price: 21500 },
        { price: 26500 }, { price: 31500 },
        { price: 41500 }, { price: 51500 },
        { price: 76500 }, { price: 101500 },
    ];

    const validatePhoneNumber = (phoneNumber) => {
        setErrorMessage('');

        if (!phoneNumber.startsWith('08')) {
            setErrorMessage('Nomor harus dimulai dengan 08');
            setIsPhoneNumberValid(false);
            return false;
        }

        if (phoneNumber.length > 13) {
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

        if (!validPrefixes.some(prefix => phoneNumber.startsWith(prefix))) {
            setErrorMessage('Nomor tidak sesuai dengan operator resmi di Indonesia');
            setIsPhoneNumberValid(false);
            return false;
        }

        setIsPhoneNumberValid(true);
        return true;
    };

    const handlePhoneNumberChange = (phoneNumber) => {
        setPhoneNumber(phoneNumber);
        validatePhoneNumber(phoneNumber);
    };

    const renderTopUpOption = ({ index, item }) => (
        <TouchableOpacity
            key={index}
            style={pulsa_styles.topUpBox}
            onPress={() => navigation.navigate('Payment', { selectedTopUp: item, phoneNumber })}
        >
            <CustomText style={pulsa_styles.topUpPriceFirst}>
                {((item.price - 1500)).toLocaleString('id-ID')}
            </CustomText>
            <CustomText style={pulsa_styles.topUpPrice}>
                Harga Rp {item.price.toLocaleString('id-ID')}
            </CustomText>
        </TouchableOpacity>
    );

    return (
        <View style={pulsa_styles.container}>
            <CategoryHeader title='Pulsa & Paket Data' />
            <View style={pulsa_styles.contentContainer}>

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
                                <Icon name="close" size={24} />
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
                    selectedTab === 'Isi Pulsa' ? (
                        <FlatList
                            data={priceOptions}
                            renderItem={renderTopUpOption}
                            keyExtractor={(item) => item.price.toString()}
                            numColumns={2}
                            columnWrapperStyle={pulsa_styles.topUpRow}
                        />
                    ) : (
                        // <FlatList
                        //     data={priceOptions}
                        //     renderItem={renderTopUpOption}
                        //     keyExtractor={(item) => item.amount}
                        //     numColumns={2}
                        //     columnWrapperStyle={pulsa_styles.topUpRow}
                        // />
                        <View>
                            <CustomText>Paket Data</CustomText>
                        </View>
                    )
                ) : (
                    <View style={pulsa_styles.messageContainer}>
                        <Icon name="info" size={24} style={pulsa_styles.messageIcon} />
                        <CustomText>
                            Isi nomor ponsel yang valid untuk menampilkan menu pembelian.
                        </CustomText>
                    </View>
                )}
            </View>
        </View>
    );
};

export default PulsaScreen;