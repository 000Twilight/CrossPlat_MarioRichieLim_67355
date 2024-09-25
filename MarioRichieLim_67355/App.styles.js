import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  card: {

  },
  userList: {

  },
  avatar: {

  },
  boldText: {

  },
});

export default styles;

// import { StyleSheet } from 'react-native';
// import { DefaultTheme, DarkTheme } from 'react-native-paper';

// // Define the combined theme and styles
// export const combinedThemeAndStyles = (isDarkTheme) => {
//   const customTheme = isDarkTheme ? {
//     ...DarkTheme,
//     colors: {
//       primary: '#191970',
//       background: '#333333',
//       text: 'white',
//     },
//   } : {
//     ...DefaultTheme,
//     colors: {
//       primary: '#ffffff',
//       background: '#f8f8f8',
//       text: 'black',
//     },
//   };

//   // Create styles based on the theme
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       marginTop: 10,
//       backgroundColor: customTheme.colors.background,
//     },
//     contentContainer: {
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     card: {
//       width: '80%',
//       marginBottom: 10,
//       borderRadius: 8,
//       backgroundColor: customTheme.colors.primary,
//     },
//   });

//   return { customTheme, styles };
// };