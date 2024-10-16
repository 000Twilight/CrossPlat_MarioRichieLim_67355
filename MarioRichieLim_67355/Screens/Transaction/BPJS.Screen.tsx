import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CustomText from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryHeader from '../../Components/CategoryHeader';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import pulsa_styles from '../../Styles/Transaction/Pulsa.style';
import BPJS_styles from '../../Styles/Transaction/BPJS.style';

const BPJSScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { state, dispatch } = useContext(TransactionContext);

  const priceOptions = [
    { info: 'BPJS Kelas 1', price: 150000 },
    { info: 'BPJS Kelas 2', price: 100000 },
    { info: 'BPJS Kelas 3', price: 35000 },
    { info: 'BPJS Keluarga (3 orang)', price: 300000 },
    { info: 'BPJS Keluarga (4 orang)', price: 400000 },
  ];

  const validateBPJSNumber = (bpjsNumber) => {
    if (bpjsNumber.length !== 13) {
      setErrorMessage('Nomor BPJS harus terdiri dari 13 digit');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleBPJSNumberChange = (bpjsNumber) => {
    dispatch({ type: 'SET_BPJS_NUMBER', payload: bpjsNumber });
    validateBPJSNumber(bpjsNumber);
  };

  const handleTopUpSelection = (item) => {
    dispatch({ type: 'SET_SELECTED_PRICE', payload: item.price });
    dispatch({ type: 'SET_SELECTED_PACKAGE', payload: item.info });
    navigation.navigate('Payment');
  };

  const renderTopUpOption = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={pulsa_styles.topUpBox}  // Adjust styling here for single-column layout if needed
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

  return (
    <View style={pulsa_styles.container}>
      <CategoryHeader title="Pembayaran BPJS" />
      <View style={pulsa_styles.contentContainer}>

        <CustomText style={pulsa_styles.title}>Pembayaran BPJS</CustomText>

        <View style={pulsa_styles.inputContainer}>
          <CustomText style={pulsa_styles.label}>Nomor BPJS</CustomText>
          <View style={pulsa_styles.inputWrapper}>
            <TextInput
              style={pulsa_styles.textInput}
              placeholder="Masukkan Nomor BPJS (13 digit)"
              keyboardType="number-pad"
              value={state.bpjsNumber}
              onChangeText={handleBPJSNumberChange}
            />
            {state.bpjsNumber.length > 0 && (
              <TouchableOpacity onPress={() => handleBPJSNumberChange('')}>
                <Icon name="close" size={24} />
              </TouchableOpacity>
            )}
          </View>
          {errorMessage !== '' && <CustomText style={pulsa_styles.errorText}>{errorMessage}</CustomText>}
        </View>

        {state.bpjsNumber.length === 13 ? (
          <FlatList
            data={priceOptions}
            renderItem={renderTopUpOption}
            keyExtractor={(item) => item.price.toString()}
            columnWrapperStyle={null}  
          />
        ) : (
          <View style={pulsa_styles.messageContainer}>
            <Icon name="info" size={24} style={pulsa_styles.messageIcon} />
            <CustomText>
              Isi nomor BPJS yang valid untuk menampilkan menu pembayaran.
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
};

export default BPJSScreen;