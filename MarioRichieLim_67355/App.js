import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from './Input'; // Mengimpor komponen Input

export default function App() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  return (
    <View style={styles.container}>      
      <Input
        label="Name"
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
      />

      <Input
        label="NIM"
        value={nim}
        placeholder="Enter your NIM"
        onChangeText={setNim}
        keyboardType="numeric" // Menambahkan keyboard khusus angka
      />

      <Text>Name: {name}</Text>
      <Text>NIM: {nim}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
});
