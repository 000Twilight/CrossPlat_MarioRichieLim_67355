import { StyleSheet } from 'react-native';

const splash_styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Customize splash screen background color
  },
  logo: {
    width: 220,
    height: 220, // Adjust the size of the image
  },
});

export default splash_styles;