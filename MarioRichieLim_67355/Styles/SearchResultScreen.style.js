import { StyleSheet } from 'react-native';

const searchResult_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },

  searchBar: {
    height: 60,
    width: '100%',
    backgroundColor: "#1e1e1e",
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 17,
    color: 'white',
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#B3B3B3', 
    textAlign: 'center',
    marginTop: 10,
  },
});

export default searchResult_styles;