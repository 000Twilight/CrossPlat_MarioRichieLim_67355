import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomText from '../Components/CustomText';
import historyDetail_styles from '../Styles/HistoryDetail.style';

const HistoryDetailScreen = ({ route, navigation }) => {
  // Get the transaction details from route params
  const { transaction } = route.params;

  return (
    <View style={historyDetail_styles.container}>
      <CustomText style={styles.label}>Trace No:</CustomText>
      <CustomText style={styles.value}>{transaction.traceNo}</CustomText>

      <CustomText style={styles.label}>Jenis Kartu:</CustomText>
      <CustomText style={styles.value}>{transaction.cardType || 'N/A'}</CustomText>

      <CustomText style={styles.label}>Jenis Transaksi:</CustomText>
      <CustomText style={styles.value}>{transaction.transactionType || 'N/A'}</CustomText>

      <CustomText style={styles.label}>No. Telp:</CustomText>
      <CustomText style={styles.value}>{transaction.phoneNumber}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default HistoryDetailScreen;
