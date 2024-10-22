import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import CustomText from '../../Components/CustomText';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryHeader from '../../Components/CategoryHeader';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import pulsa_styles from '../../Styles/Transaction/Pulsa.style';

const PLNScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const { state, dispatch } = useContext(TransactionContext);
  const [isTokenIdValid, setIsTokenIdValid] = useState(false);

  const priceOptions = [
    { info: '1210,1 kWh', price: 1880000 }, { info: '968,4 kWh', price: 1248000 },
    { info: '659,7 kWh', price: 994000 }, { info: '328,9 kWh', price: 494000 },
    { info: '132,3 kWh', price: 244000 }, { info: '66,2 kWh', price: 97000 },
    { info: '33,1 kWh', price: 47000 }, { info: '13,2 kWh', price: 17000 },
    { info: '6,6 kWh', price: 8500 }, { info: '3,3 kWh', price: 4000 },
  ];

  const validateTokenId = (tokenId) => {
    if (tokenId.length !== 20) {
      setErrorMessage('PLN ID Token harus terdiri dari 20 digit');
      setIsTokenIdValid(false);
      return false;
    }
    setErrorMessage('');
    setIsTokenIdValid(true);
    return true;
  };

  const handleTokenIdChange = (tokenId) => {
    validateTokenId(tokenId);
    dispatch({ type: 'SET_CUSTOMER_ID', payload: tokenId });
    dispatch({ type: 'SET_TRANSACTION_TYPE', payload: 'Listrik' });
  };

  const handleTopUpSelection = (item) => {
    dispatch({ type: 'SET_SELECTED_PRICE', payload: item.price });
    dispatch({ type: 'SET_SELECTED_PACKAGE', payload: item.info });
    dispatch({ type: 'SET_TRANSACTION_TYPE', payload: 'Listrik' });
    navigation.navigate('Payment');
  };

  const renderTopUpOption = ({ item, index }) => (
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

  return (
    <View style={pulsa_styles.container}>
      <CategoryHeader title="PLN Token" />
      <View style={pulsa_styles.contentContainer}>

        <CustomText style={pulsa_styles.title}>PLN Token</CustomText>

        <View style={pulsa_styles.inputContainer}>
          <CustomText style={pulsa_styles.label}>PLN ID Token</CustomText>
          <View style={pulsa_styles.inputWrapper}>
            <TextInput
              style={pulsa_styles.textInput}
              placeholder="Masukkan PLN ID Token (20 digit)"
              keyboardType="number-pad"
              value={state.customerId}
              onChangeText={handleTokenIdChange}
            />
            {state.customerId.length > 0 && (
              <TouchableOpacity onPress={() => handleTokenIdChange('')}>
                <Icon name="close" size={24} />
              </TouchableOpacity>
            )}
          </View>
          {errorMessage !== '' && <CustomText style={pulsa_styles.errorText}>{errorMessage}</CustomText>}
        </View>

        {isTokenIdValid ? (
          <FlatList
            data={priceOptions}
            renderItem={renderTopUpOption}
            keyExtractor={(item) => item.price.toString()}
            numColumns={2}
            columnWrapperStyle={pulsa_styles.topUpRow}
          />
        ) : (
          <View style={pulsa_styles.messageContainer}>
            <Icon name="info" size={24} style={pulsa_styles.messageIcon} />
            <CustomText>
              Isi PLN ID Token yang valid untuk menampilkan menu pembelian.
            </CustomText>
          </View>
        )}
      </View>
    </View>
  );
};

export default PLNScreen;
