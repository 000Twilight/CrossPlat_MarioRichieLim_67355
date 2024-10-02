import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash.Screen';
import BottomTabs from './Screens/Components/BottomTabs';
import { View, Text, TouchableOpacity, Image, StyleSheet, navigation } from 'react-native';

const TabComponent = ({ activeTab, setActiveTab }) => {
  const tabs = ['All', 'Music', 'Podcast'];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setActiveTab(tab)}
          style={[
            styles.tabButton,
            {
              backgroundColor: activeTab === tab ? '#28d35b' : '#8c8c8c'
            }, // Darker gray for inactive tabs
          ]}
        >
          <Text style={[
            styles.tabText,
            { color: activeTab === tab ? '#000000' : '#ffffff' } // Black text when active, white otherwise
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const CustomHeader = ({ navigation, activeTab, setActiveTab }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require('./Assets/spotify-logo.png')} // Replace with your profile icon
          style={styles.profileIcon}
        />
      </TouchableOpacity>
      <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [activeTab, setActiveTab] = React.useState('All');

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{
              headerTitle: () => (
                <CustomHeader
                  navigation={navigation}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ),
              headerTransparent: true,
              headerStyle: {
                backgroundColor: 'transparent',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 40, // Lower the header
  },
  profileIcon: {
    width: 50, // Increase logo size
    height: 50,
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    marginHorizontal: 5, // Reduce gap between tabs
    paddingVertical: 8, // Increase vertical padding for a taller oval shape
    paddingHorizontal: 15,
    borderRadius: 25, // More height for oval effect
  },
  tabText: {
    fontSize: 16,
  },
});
