import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import CustomText from '../Components/CustomText';
import { TransactionContext } from '../Contexts/Transaction.Context';
import CategoryHeader from '../Components/CategoryHeader';

const HistoryDetailScreen = ({ navigation }) => {
  const { state } = useContext(TransactionContext);

  return (
    <View style={styles.container}>
      <CategoryHeader title="Transaction Detail" />
      <CustomText style={styles.label}>Phone Number: {state.phoneNumber}</CustomText>
      <CustomText style={styles.label}>Package: {state.selectedPackage}</CustomText>
      <CustomText style={styles.label}>Price: {state.selectedPrice}</CustomText>
      <CustomText style={styles.label}>Trace No: {state.traceNo}</CustomText>
      <CustomText style={styles.label}>Status: {state.status}</CustomText>
      <CustomText style={styles.label}>Date: {state.date}</CustomText>

      <View style={styles.buttonContainer}>
        <Button title="Cetak" onPress={() => console.log('Print functionality not yet implemented')} disabled />
        <Button title="Email" onPress={() => console.log('Email functionality not yet implemented')} disabled />
        <Button title="Selesai" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HistoryDetailScreen;