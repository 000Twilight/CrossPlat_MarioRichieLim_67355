import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
  return <Text {...props} style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular', 
    lineHeight: 18,
  },
});

export default CustomText;