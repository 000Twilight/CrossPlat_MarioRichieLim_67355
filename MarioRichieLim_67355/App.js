import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Mario Richie",
        last: "Lim",
        born: 2004
      });

      if (Platform.OS === "android") {
        console.log("Document written from phone with ID: ", docRef.id);
      } else {
        console.log("Document written with ID: ", docRef.id)
      }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
