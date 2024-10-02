import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import app_styles from './Styles/App.styles';

export default function App() {
  return (
    <View style={app_styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

