import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import home_styles from '../Styles/Home.style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={home_styles.container}>
      <View style={home_styles.flexRow}>
        <Image
          style={home_styles.logo}
          source={require('../Assets/Union-Logo.png')}
        />
        <Text style={home_styles.topText}>
          All-U-Need
        </Text>
      </View>


      <View style={home_styles.userInfoCard}>
        <Text style={home_styles.userName}>Mario Richie Lim</Text>
        <Text style={home_styles.userNumber}>67355</Text>

        <View style={home_styles.horizontalDivider} />

        <View style={home_styles.transactionRow}>
          <TouchableOpacity style={home_styles.transactionButton}>
            <Ionicons name="arrow-up-outline" size={24} color="#333" />
            <Text style={home_styles.buttonText}>Transfer</Text>
          </TouchableOpacity>

          <View style={home_styles.verticalDivider} />

          <TouchableOpacity style={home_styles.transactionButton}>
            <Ionicons name="arrow-down-outline" size={24} color="#333" />
            <Text style={home_styles.buttonText}>Tarik Tunai</Text>
          </TouchableOpacity>

          <View style={home_styles.verticalDivider} />

          <TouchableOpacity style={home_styles.transactionButton}>
            <FontAwesome name="ellipsis-h" size={24} color="#333" />
            <Text style={home_styles.buttonText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={home_styles.quickAccessRow}>
        <TouchableOpacity style={home_styles.quickAccessButton}>
          <Ionicons name="phone-portrait-outline" size={40} color="#6A0DAD" />
          <Text>Pulsa/Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home_styles.quickAccessButton}>
          <Ionicons name="flash-outline" size={40} color="#6A0DAD" />
          <Text>Listrik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={home_styles.quickAccessButton}>
          <Ionicons name="medkit-outline" size={40} color="#6A0DAD" />
          <Text>BJS</Text>
        </TouchableOpacity>
      </View>

      {/* Offer Banner */}
      <View style={home_styles.offerBanner}>
        <Text style={home_styles.offerText}>Super Deal!</Text>
        <Text style={home_styles.offerDetails}>SPECIAL OFFER SALE UPTO 80% OFF</Text>
      </View>
    </View >
  );
};

export default HomeScreen;
