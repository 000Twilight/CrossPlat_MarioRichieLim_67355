import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // Import icons
import CustomHeader from '../Components/CustomHeader'; // Import CustomHeader
import { View, Text, Image } from 'react-native';
import library_styles from '../Styles/LibraryScreen.style';

const LibraryScreen = ({ navigation }) => {
  const rightIcons = [
    {
      onPress: () => console.log('Search icon pressed'),
      icon: <Image
        source={require('../Assets/search-not-full.png')}
        style={library_styles.iconImage}
      />,
    },
    {
      onPress: () => console.log('Settings icon pressed'),
      icon: <Image
      source = { require('../Assets/search-not-full.png') }
      style={ library_styles.iconImage }
      />,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        navigation={navigation}
        title="Your Library"
        activeButton={null}
        middleButtons={null}
        rightIcons={rightIcons}
      />
      <View style={library_styles.container}>
        <Text style={library_styles.text}>This is the Library Screen</Text>
      </View>
    </View>
  );
};

export default LibraryScreen;
