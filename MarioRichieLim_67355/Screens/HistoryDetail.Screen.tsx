import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../Components/CustomText';
import { TransactionContext } from '../Contexts/Transaction.Context';
import CategoryHeader from '../Components/CategoryHeader';

const HistoryDetailScreen = ({ navigation }) => {
  const { state } = useContext(TransactionContext);

  const transaction = state.transactionHistory.find(item => item.traceNo === state.selectedTraceNo);

  return (
    <View style={styles.container}>
      <CategoryHeader title="Transaksi Detail" />
      <View style={styles.contentContainer}>
        <View style={styles.merchantInfo}>
          <Image source={require('../Assets/Profile.jpeg')} style={styles.logoPlaceholder} />
          <CustomText style={styles.merchantName}>Union-X</CustomText>
          <CustomText style={styles.merchantAddress}>UMN</CustomText>
        </View>

        <View style={styles.flexRow}>
          <CustomText style={styles.label}>TERMINAL</CustomText>
          <CustomText style={styles.value}>REFUND</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>JENIS TRANSAKSI</CustomText>
          <CustomText style={styles.value}>{transaction.transactionType}</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>JENIS KARTU</CustomText>
          <CustomText style={styles.value}>{transaction.cardType}</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>NOMOR</CustomText>
          <CustomText style={styles.value}>{transaction.customerId}</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>TGL. TRANSAKSI</CustomText>
          <CustomText style={styles.value}>
            {new Date(transaction.date).toLocaleString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>TRACE NO</CustomText>
          <CustomText style={styles.value}>{transaction.traceNo}</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>REFERENCE NO</CustomText>
          <CustomText style={styles.value}>MRL0405</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>APPROVAL CODE</CustomText>
          <CustomText style={styles.value}>00001</CustomText>
        </View>
        <View style={styles.flexRow}>
          <CustomText style={styles.label}>TOTAL</CustomText>
          <CustomText style={styles.value}>Rp {transaction.price.toLocaleString('id-ID')}</CustomText>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.buttonflexRow}>
            <TouchableOpacity style={styles.button}>
              <CustomText style={styles.buttonText}>Cetak</CustomText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <CustomText style={styles.buttonText}>Email</CustomText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.finishButton} onPress={() => navigation.goBack()}>
            <CustomText style={styles.buttonText}>Selesai</CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  merchantInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 80,
    height: 40,
    marginBottom: 8,
  },
  merchantName: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  merchantAddress: {
    fontSize: 14,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonflexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
  },
  finishButton: {
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#2566A5',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F0F0F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryDetailScreen;
