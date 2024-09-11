import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from "./Component/Counter.tsx";
import { useState } from "react";
import Input from "./Component/Input.tsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState('');
  const [submitName, setSubmitName] = useState('');
  const [submitAge, setSubmitAge] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputWord = ( word ) => {
    setWord(word);
  };

  const handleSubmitForm = () => {
    setSubmitName(word);
    setSubmitAge(count);
  }

  return (
    <View style={styles.container}>
      <Text>My name is : {submitName}</Text>
      <Text>My age is : {submitAge}</Text>
      <Input
        placeholder="What is your name?"
        handleInputWord={handleInputWord}
      />
      <Counter 
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handleSubmitForm={handleSubmitForm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});