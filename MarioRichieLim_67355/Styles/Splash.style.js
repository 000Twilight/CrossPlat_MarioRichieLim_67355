import { StyleSheet } from 'react-native';

const splash_styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d', // Customize splash screen background color
  },
  logo: {
    width: 200,
    height: 200, // Adjust the size of the image
  },
});

export default splash_styles;