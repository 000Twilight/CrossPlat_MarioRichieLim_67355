import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import search_styles from '../Styles/SearchScreen.style';

const BrowseButton = ({ backgroundColor, text }) => {
  return (
    <TouchableOpacity style={[search_styles.browseButtonAll, { backgroundColor }]}>
      <Text style={search_styles.browseTextAll}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BrowseButton;
