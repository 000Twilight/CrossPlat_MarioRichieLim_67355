import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { KeyboardTypeOptions } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, keyboardType = 'default' as KeyboardTypeOptions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '50%',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default Input;