import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/Splash.Screen';
import SearchScreen from './Screens/Search.Screen';
import LibraryScreen from './Screens/Library.Screen';
import BottomTabs from './Components/BottomTabs';
import { View, Text, TouchableOpacity, Image, StyleSheet, navigation, StatusBar } from 'react-native';

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
              backgroundColor: activeTab === tab ? '#28d35b' : '#2e2e2e'
            },
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
        <StatusBar
          backgroundColor="#16181d"
          barStyle="light-content"
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0d0d0d', // Set header background color to black
            },
            headerTintColor: '#fff',
          }}
        >
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
            }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerTitle: () => (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Search</Text>
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              headerTitle: () => (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    Your Library</Text>
                </View>
              ),
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
    paddingLeft: 0,
    marginTop: 40,
    backgroundColor: 'black',
  },
  profileIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    marginHorizontal: 3,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabText: {
    fontSize: 12,
  },
});
