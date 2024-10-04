import React from 'react';
import CustomHeader from '../Components/CustomHeader'; // Import CustomHeader
import { View, Text, Image } from 'react-native';
import search_styles from '../Styles/SearchScreen.style';

const SearchScreen = ({ navigation }) => {
  const rightIcons = [
    {
      onPress: () => console.log('Search icon pressed'),
      icon: <Image
        source={require('../Assets/search-not-full.png')}
        style={search_styles.iconImage}
      />,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        navigation={navigation}
        title="Search"
        activeButton={null}
        rightIcons={rightIcons}
        middleButtons={null}
      />
      <View style={search_styles.container}>
        <Text style={search_styles.text}>This is the Search Screen</Text>
      </View>
    </View>
  );
};

export default SearchScreen;
