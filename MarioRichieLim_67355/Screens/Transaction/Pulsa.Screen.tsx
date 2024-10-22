import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import pulsa_styles from '../../Styles/Transaction/Pulsa.style';
import CustomText from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryHeader from '../../Components/CategoryHeader';
import { TransactionContext } from '../../Contexts/Transaction.Context';

const PulsaScreen = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedTab, setSelectedTab] = useState('Isi Pulsa');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

    const { state, dispatch } = useContext(TransactionContext);

    const priceOptions = [
        { info: '5.000', price: 6500 }, { info: '10.000', price: 11500 },
        { info: '15.000', price: 16500 }, { info: '20.000', price: 21500 },
        { info: '25.000', price: 26500 }, { info: '30.000', price: 31500 },
        { info: '40.000', price: 41500 }, { info: '50.000', price: 51500 },
        { info: '75.000', price: 76500 }, { info: '100.000', price: 101500 },
    ];

    const dataPackageOptions = [
        { info: '5GB', price: 31500 }, { info: '10GB', price: 51500 },
        { info: '15GB', price: 76500 }, { info: '20GB', price: 101500 },
        { info: '25GB', price: 126500 }, { info: '30GB', price: 151500 },
        { info: '40GB', price: 176500 }, { info: '50GB', price: 201500 },
        { info: '60GB', price: 251500 }, { info: '100GB', price: 401500 },
    ];

    const validatePhoneNumber = (phoneNumber) => {
        setErrorMessage('');

        if (!phoneNumber.startsWith('08')) {
            setErrorMessage('Nomor harus dimulai dengan 08');
            setIsPhoneNumberValid(false);
            return false;
        }

        if (phoneNumber.length < 10) {
            setErrorMessage('Nomor telepon tidak boleh kurang dari 10 digit');
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

        dispatch({ type: 'SET_TRANSACTION_TYPE', payload: 'Pulsa' });
        dispatch({ type: 'SET_CUSTOMER_ID', payload: phoneNumber });
        setIsPhoneNumberValid(true);
        return true;
    };

    const handlePhoneNumberChange = (phoneNumber) => {
        dispatch({ type: 'SET_CUSTOMER_ID', payload: phoneNumber });

        const isValid = validatePhoneNumber(phoneNumber);

        if (isValid) {
            const type = selectedTab === 'Isi Pulsa' ? 'Pulsa' : 'Paket Data';
            dispatch({ type: 'SET_TRANSACTION_TYPE', payload: type });
        } else {
            // Optionally, you can reset the transaction type if input is invalid
            dispatch({ type: 'SET_TRANSACTION_TYPE', payload: '' });
        }
    };

    const handleTopUpSelection = (item) => {
        const type = selectedTab === 'Isi Pulsa' ? 'Pulsa' : 'Paket Data';

        dispatch({ type: 'SET_TRANSACTION_TYPE', payload: type });
        dispatch({ type: 'SET_SELECTED_PRICE', payload: item.price });
        dispatch({ type: 'SET_SELECTED_PACKAGE', payload: item.info });
        navigation.navigate('Payment');
    };


    const renderTopUpOption = ({ index, item }) => (
        <TouchableOpacity
            key={index}
            style={pulsa_styles.topUpBox}
            onPress={() => handleTopUpSelection(item)}
        >
            <CustomText style={pulsa_styles.topUpPriceFirst}>
                {item.info}
            </CustomText>
            <CustomText style={pulsa_styles.topUpPrice}>
                Harga Rp {item.price.toLocaleString('id-ID')}
            </CustomText>
        </TouchableOpacity>
    );

    const renderDataPackageOption = ({ index, item }) => (
        <TouchableOpacity
            key={index}
            style={pulsa_styles.topUpBox}
            onPress={() => handleTopUpSelection(item)}
        >
            <CustomText style={pulsa_styles.topUpPriceFirst}>
                {item.info} Data
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
                            value={state.customerId}
                            onChangeText={handlePhoneNumberChange}
                        />
                        {state.customerId.length > 0 && (
                            <TouchableOpacity onPress={() => handlePhoneNumberChange('')}>
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

                        <FlatList
                            data={dataPackageOptions}
                            renderItem={renderDataPackageOption}
                            keyExtractor={(item) => item.price.toString()}
                            numColumns={2}
                            columnWrapperStyle={pulsa_styles.topUpRow}
                        />
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