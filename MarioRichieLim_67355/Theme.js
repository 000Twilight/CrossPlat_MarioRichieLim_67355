import { DefaultTheme, DarkTheme } from 'react-native-paper';

export const theme = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#191970', // Custom primary color
      background: '#333333', // Custom background color
      text: 'white', // Custom text color
    },
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffffff', // Custom primary color
      background: '#f8f8f8', // Custom background color
      text: 'black', // Custom text color
    },
  },
};