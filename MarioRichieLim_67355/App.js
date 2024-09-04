import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './Styles';
import data from './data.json';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <Text>Testing</Text> */}
      <View style={styles.contentContainer}>
        {data.map((item) => (
          <View style={styles.contentContainer}>
            <Image source={{ uri: item.photo_url }} style={styles.photo} />
            <Text style={styles.textSize}>{item.name}</Text>
            <Text style={styles.textSize}>{item.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
