import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BackEndScreen = () => {
  const [jamKerja, setJamKerja] = useState('');
  const [tarifPerJam, setTarifPerJam] = useState('');
  const [gaji, setGaji] = useState(null);

  const hitungGaji = () => {
    const jam = parseFloat(jamKerja);
    const tarif = parseFloat(tarifPerJam);

    let totalGaji = 0;

    if (jam > 40) {
      const jamLembur = jam - 40;
      totalGaji = (40 * tarif) + (jamLembur * tarif * 1.5);
    } else {
      totalGaji = jam * tarif;
    }

    setGaji(totalGaji);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hitung Gaji Karyawan</Text>

      <Text>Jumlah Jam Kerja (per minggu):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={jamKerja}
        onChangeText={setJamKerja}
      />

      <Text>Tarif Per Jam:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tarifPerJam}
        onChangeText={setTarifPerJam}
      />

      <Button title="Hitung Gaji" onPress={hitungGaji} />

      {gaji !== null && (
        <Text style={styles.result}>Gaji Total: Rp {gaji.toFixed(2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BackEndScreen;