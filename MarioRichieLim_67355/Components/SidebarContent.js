import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can install this package if not already installed

function SidebarContent({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>M</Text>
        </View>
        <View>
          <Text style={styles.profileName}>Twilight MRL</Text>
          <Text style={styles.viewProfile}>View profile</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Menu Items */}
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <Icon name="person-add-outline" size={22} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Add Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <Icon name="flash-outline" size={22} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>What's New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <Icon name="calendar-outline" size={22} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Your Sound Capsule</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <Icon name="time-outline" size={22} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Listening History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <Icon name="settings-outline" size={22} color="#fff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Settings and Privacy</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    paddingTop: 20,
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },

  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewProfile: {
    color: '#999',
    fontSize: 13,
  },

  menuItem: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    marginRight: 15,
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
  },

  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  circleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },

  divider: {
    marginTop: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
  }
});

export default SidebarContent;
