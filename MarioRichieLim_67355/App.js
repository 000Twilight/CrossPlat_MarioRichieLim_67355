// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styles from './Styles';
import { theme } from './Theme';
import data from './data.json';
import { Provider as PaperProvider, Card, Title, Avatar } from 'react-native-paper';

const customTheme = theme.dark;

export default function App() {
  return (
    // <PaperProvider>
    //   <ScrollView style={styles.container}>
    //     <Title>Data</Title>
    //     <View style={styles.contentContainer}>
    //       {data.map((item) => (
    //         <Card key={item.id} style={styles.card}>
    //           <Image source={{ uri: item.photo_url }} style={styles.photo} />
    //           <Card.Content>
    //             <Text style={styles.textSize}>{item.name}</Text>
    //             <Text style={styles.textSize}>{item.email}</Text>
    //           </Card.Content>
    //         </Card>
    //       ))}
    //     </View>
    //   </ScrollView>
    // </PaperProvider>

    // <PaperProvider>
    //   <ScrollView style={{ flex: 1, marginTop: 10 }}>
    //     <Title style={{ textAlign: 'center', marginVertical: 10, color: 'black'}}>Data</Title>
    //     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    //       {data.map((item) => (
    //         <Card key={item.id} style={{ width: '20%', marginBottom: 10, borderRadius: 8, backgroundColor: '#191970' }}>
    //           <Card.Content style={{ alignItems: 'center' }}>
    //             <Avatar.Image size={100} source={{ uri: item.photo_url }} style={{ marginBottom: 10 }} />
    //             <Text style={{ fontSize: 16, textAlign: 'center', color: 'white' }}>{item.name}</Text>
    //             <Text style={{ fontSize: 14, textAlign: 'center', color: 'grey' }}>{item.email}</Text>
    //           </Card.Content>
    //         </Card>
    //       ))}
    //     </View>
    //   </ScrollView>
    // </PaperProvider>

    <PaperProvider theme={customTheme}> 
      <ScrollView style={styles.container}>
        <Title style={{ textAlign: 'center', marginVertical: 10, color: customTheme.colors.text }}>Data</Title> 
        <View style={styles.contentContainer}>
          {data.map((item) => (
            <Card key={item.id} style={styles.card}>
              <Card.Content style={{ alignItems: 'center' }}>
                <Avatar.Image size={100} source={{ uri: item.photo_url }} style={{ marginBottom: 10 }} />
                <Text style={{ fontSize: 16, textAlign: 'center', color: customTheme.colors.text }}>{item.name}</Text> 
                <Text style={{ fontSize: 14, textAlign: 'center', color: customTheme.colors.text }}>{item.email}</Text> 
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}