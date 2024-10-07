import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../Screens/Search.Screen';
import SearchResultScreen from '../Screens/SearchResult.Screen';

const SearchStack = createNativeStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
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

export default SearchStackNavigator;