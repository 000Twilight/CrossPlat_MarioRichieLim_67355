import { Text, View, ScrollView, useState } from 'react-native';
import { Provider as PaperProvider, Card, Title, Avatar, Button, useTheme } from 'react-native-paper';
import data from './data.json';
import styles from './Styles';
// import { theme } from './Theme';

export default function App() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const toggleTheme = () => setIsDarkTheme(!isDarkTheme);
  // const currentTheme = isDarkTheme ? theme.dark : theme.light;

  // const styles = stylesFunc(dark);

  return (
    // <PaperProvider theme={theme}>
    <PaperProvider>
      <ScrollView style={styles.container}>
        {/* <Title style={{ textAlign: 'center', marginVertical: 10, color: currentTheme.colors.text }}>Data</Title> */}
        <Title style={styles.title}>Data</Title>
        {/* <Button title="Toggle Theme" onPress={toggleTheme}/> */}
        <View style={styles.contentContainer}>
          {data.map((item) => (
            <Card key={item.id} style={{ marginBottom: 10, backgroundColor: 'white', width: '20%' }} >
              <Card.Content style={{ alignItems: 'center' }}>
                <Avatar.Image size={100} source={{ uri: item.photo_url }} style={{ marginBottom: 10 }} />
                {/* <Text style={{ fontSize: 16, textAlign: 'center', color: currentTheme.colors.text }}>{item.name}</Text>
                <Text style={{ fontSize: 14, textAlign: 'center', color: currentTheme.colors.text }}>{item.email}</Text> */}
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.name}</Text>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>{item.email}</Text>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
