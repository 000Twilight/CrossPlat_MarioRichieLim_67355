import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchResultScreen from '../Screens/SearchResult.Screen';
import LibraryScreen from '../Screens/Library.Screen';

const SearchStack = createNativeStackNavigator();

const LibraryStackNavigation = ( Screen ) => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{ headerShown: false }}
      />
      <SearchStack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}

export default LibraryStackNavigation;