import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center', 
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
  },
  userList: {
    marginBottom: 20,
    alignItems: 'center',      
  },
  imageContainer: {
    alignItems: 'center',      
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',       // Center the text within each user item
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  emailListItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
