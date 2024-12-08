import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import frontend_styles from '../styles/FrontEnd.style';
import Navbar from '../components/Navbar';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const FrontEndScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fafafa', paddingBottom: 100 }}>
      <Navbar />
      <View style={frontend_styles.container}>

        <View style={frontend_styles.header}>
          <View style={frontend_styles.logoSection}>
            <Image source={require('../assets/crown.png')} style={frontend_styles.logo} />
            <Text style={frontend_styles.title}>CARTRIDGE KINGS</Text>
          </View>
          <View style={frontend_styles.searchSection}>
            <View style={frontend_styles.inputContainer}>
              <MaterialIcons name="search" size={24} color="#000" style={frontend_styles.searchIcon} />
              <TextInput
                style={frontend_styles.searchInput}
                placeholder="Search"
              />
            </View>
            <TouchableOpacity style={frontend_styles.cartButton}>
              <Text style={frontend_styles.cartButtonText}>CART (1)</Text>
            </TouchableOpacity>
          </View>
        </View >

        <View style={frontend_styles.navbar2}>
          <View style={frontend_styles.activeNav}>
            <Text style={[frontend_styles.navText, { fontWeight: 'bold' }]}>HOME</Text>
          </View>
          <View style={frontend_styles.inactiveNav}>
            <Text style={frontend_styles.navText}>INK CARTRIDGES</Text>
          </View>
          <View style={frontend_styles.inactiveNav}>
            <Text style={frontend_styles.navText}>TONER CARTRIDGES</Text>
          </View>
          <View style={frontend_styles.inactiveNav}>
            <Text style={frontend_styles.navText}>CONTACT US</Text>
          </View>
          <View style={frontend_styles.inactiveNav}>
            <Text style={frontend_styles.navText}>LOGIN / REGISTER</Text>
          </View>
        </View>

      </View>

      <View style={frontend_styles.bannerContainer}>
        <Image source={require('../assets/banner.jpg')} style={frontend_styles.banner} />
        <Text style={frontend_styles.textBanner}>
          FIND THE RIGHT CARDRIDGES FOR YOUR PRINTER
        </Text>
        <View style={frontend_styles.boxBannerContainer}>
          <View style={{ paddingVertical: 20, paddingHorizontal: 112, backgroundColor: '#1f88e6' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
              3-Step Easy Search®
            </Text>
          </View>
          <View style={{ paddingVertical: 20, paddingHorizontal: 112, backgroundColor: '#f0f0f0' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Search by Serial Number
            </Text>
          </View>
        </View>
        <View style={frontend_styles.dropdownBannerContainer}>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#f0f0f0', position: 'absolute', left: 30, top: '30%' }}>
            <Text>
              1. Printer Brand
            </Text>
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#f0f0f0', position: 'absolute', left: 210, top: '30%' }}>
            <Text>
              2. Printer Series
            </Text>
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#f0f0f0', position: 'absolute', left: 400, top: '30%' }}>
            <Text>
              3. Printer Model
            </Text>
          </View>
          <View style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#ff9917', position: 'absolute', left: 600, top: '30%' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>
              FIND CARTRIDGES
            </Text>
          </View>
        </View>
      </View>

      <View style={frontend_styles.featuredProducts}>
        <Text style={{ fontSize: 24, fontWeight: 500 }}>FEATURED PRODUCTS</Text>
      </View>

      <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <Feather name="arrow-left-circle" size={50} color="#b8b8b8" style={{ paddingLeft: 120 }} />
        </TouchableOpacity>
        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
          <View style={frontend_styles.productCard}>
            <Image source={require('../assets/product_1.png')} style={frontend_styles.productImage} />
            <Text style={frontend_styles.productName}>HP 62 Black Ink Cartridge</Text>
            <Text style={frontend_styles.subProductName}>(HP2C2P04AE)</Text>
            <Text style={{ paddingVertical: 9 }}></Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={frontend_styles.productPrice}>$9.49</Text>
              <TouchableOpacity style={frontend_styles.addButtonFeatured}>
                <Text style={frontend_styles.addButtonTextFeatured}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={frontend_styles.productCard}>
            <Image source={require('../assets/product_2.png')} style={frontend_styles.productImage} />
            <Text style={frontend_styles.productName}>Canon MF-3110 Toner</Text>
            <Text style={frontend_styles.subProductName}>(C2P04AE)</Text>
            <Text style={{ paddingVertical: 9 }}></Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={frontend_styles.productPrice}>$36.45</Text>
              <TouchableOpacity style={frontend_styles.addButtonFeatured}>
                <Text style={frontend_styles.addButtonTextFeatured}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={frontend_styles.productCard}>
            <Image source={require('../assets/product_1.png')} style={frontend_styles.productImage} />
            <Text style={frontend_styles.productName}>HP 62 Black Ink Cartridge</Text>
            <Text style={frontend_styles.subProductName}>(HP2C2P04AE)</Text>
            <Text style={frontend_styles.subProductPrice}>$9.49</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[frontend_styles.productPrice, { color: 'red', textDecorationLine: 'line-through' }]}>$5.99</Text>
              <TouchableOpacity style={frontend_styles.addButtonFeatured}>
                <Text style={frontend_styles.addButtonTextFeatured}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="arrow-right-circle" size={50} color="#ff9917" style={{ paddingRight: 120 }} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FrontEndScreen;

/*
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const FrontEndScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoSection}>
          <Image source={require('../assets/crown.png')} style={styles.logo} />
          <Text style={styles.title}>CARTRIDGE KINGS</Text>
        </View>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartButtonText}>CART (1)</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.mainContent}>
        <View style={styles.searchContainer}>
          <Text style={styles.sectionTitle}>Find the Right Cartridges for Your Printer</Text>
          <View style={styles.dropdownContainer}>
            <View style={styles.dropdown}>
              <View>
                <Text>1. Printer Brand</Text>
              </View>
            </View>
            <View style={styles.dropdown}>
              <View>
                <Text>2. Printer Series</Text>
              </View>
            </View>
            <View style={styles.dropdown}>
              <View>
                <Text>3. Printer Model</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.findButton}>
              <Text style={styles.findButtonText}>FIND CARTRIDGES</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productsSection}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productList}>
            <View style={styles.productCard}>
              <Image source={require('../assets/product_1.webp')} style={styles.productImage} />
              <Text style={styles.productName}>HP 62 Black Ink Cartridge</Text>
              <Text style={styles.productPrice}>$9.49</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productCard}>
              <Image source={require('../assets/product_2.jpg')} style={styles.productImage} />
              <Text style={styles.productName}>Canon MF-3110 Toner</Text>
              <Text style={styles.productPrice}>$36.45</Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: '#f8f8f8' },
  logoSection: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 50, height: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginLeft: 10 },
  searchSection: { flexDirection: 'row', alignItems: 'center' },
  searchInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, flex: 1, marginRight: 10 },
  cartButton: { backgroundColor: '#ff9917', padding: 10, borderRadius: 5 },
  cartButtonText: { color: 'white', fontWeight: 'bold' },
  mainContent: { padding: 20 },
  searchContainer: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  dropdownContainer: { flexDirection: 'row', alignItems: 'center' },
  dropdown: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginRight: 10, padding: 10 },
  findButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  findButtonText: { color: 'white', fontWeight: 'bold' },
  productsSection: { marginTop: 20 },
  productList: { flexDirection: 'row', justifyContent: 'space-between' },
  productCard: { width: '48%', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10 },
  productImage: { width: '100%', height: 100, resizeMode: 'contain' },
  productName: { fontSize: 16, marginVertical: 5 },
  productPrice: { fontSize: 16, fontWeight: 'bold' },
  addButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, marginTop: 10 },
  addButtonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
});

export default FrontEndScreen;

*/