import { StyleSheet } from 'react-native';
import { theme } from './Theme';

const customTheme = theme.dark;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  card: {
    width: '20%', 
    marginBottom: 10, 
    borderRadius: 8, 
    backgroundColor: customTheme.colors.primary,
  },
});

export default styles;
