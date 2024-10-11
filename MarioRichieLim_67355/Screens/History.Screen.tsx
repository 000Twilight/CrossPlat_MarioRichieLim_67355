import React, { useContext } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import CustomText from '../Components/CustomText';
import { TransactionContext } from '../Contexts/Transaction.Context';
import history_styles from '../Styles/History.style';

const HistoryScreen = ({ navigation }) => {
  const { state } = useContext(TransactionContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={history_styles.transactionItem}
      onPress={() => navigation.navigate('HistoryDetail', { transaction: item })}
    >
      <CustomText style={history_styles.traceNumber}>Trace No. {item.traceNo}</CustomText>
      <CustomText style={history_styles.date}>{item.date}</CustomText>
      <CustomText style={history_styles.amount}>Rp {item.price.toLocaleString('id-ID')}</CustomText>
      <CustomText style={item.status === 'Berhasil' ? history_styles.successStatus : history_styles.failedStatus}>
        {item.status}
      </CustomText>
    </TouchableOpacity>
  );

  return (
    <View style={history_styles.container}>
      {state.transactionHistory.length > 0 ? (
        <FlatList
          data={state.transactionHistory}
          renderItem={renderItem}
          keyExtractor={(item) => item.traceNo.toString()} 
        />
      ) : (
        <View style={history_styles.noTransactionsContainer}>
          <CustomText>Belum ada transaksi</CustomText>
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;
