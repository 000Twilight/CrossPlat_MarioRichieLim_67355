import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import searchResult_styles from '../Styles/SearchResultScreen.style';

const SearchResultScreen = ({ navigation }) => {
    return (
        <View style={searchResult_styles.container}>
            <View style={searchResult_styles.searchBar}>
                <Icon
                    name="arrow-back"
                    size={28}
                    color="white"
                    marginLeft={15}
                    marginRight={10}
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    placeholder='What do you want to listen to?'
                    placeholderTextColor='#6e6e6e'
                    style={searchResult_styles.searchBarInput}
                />
            </View>
            <View style={searchResult_styles.contentContainer}>
                <Text style={searchResult_styles.title}>Play what you love</Text>
                <Text style={searchResult_styles.subtitle}>Search for artists, songs, podcasts, and more.</Text>
            </View>
        </View>
    );
};

export default SearchResultScreen;
