import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import BrowseButton from './BrowseButton';  
import search_styles from '../Styles/SearchScreen.style';

const BrowseAllSection = () => {
  return (
    <ScrollView>
      <View style={search_styles.section}>
        <Text style={search_styles.sectionTitle}>Browse All</Text>
        <View style={search_styles.browseRowAll}>
          {browseButtonsData.map((item, index) => (
            <BrowseButton
              key={index} // Unique key for each component
              backgroundColor={item.backgroundColor}
              text={item.text}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default BrowseAllSection;
