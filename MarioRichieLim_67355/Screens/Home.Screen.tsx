import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import home_styles from '../Styles/Home.style';
import CustomText from '../Components/CustomText';
import { ImageBackground } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TransactionContext } from '../Contexts/Transaction.Context';

const HomeScreen = ({ navigation }) => {
  const { state } = useContext(TransactionContext);
  
  return (
    <View style={home_styles.container}>
      <View style={home_styles.flexRow}>
        <View style={home_styles.logoAndText}>
          <Image
            style={home_styles.logo}
            source={require('../Assets/Union-Logo.png')}
          />
          <CustomText style={home_styles.topText}>nionX</CustomText>
        </View>
        <Image
          style={home_styles.topProfile}
          source={require('../Assets/Profile.jpeg')}
        />
      </View>

      <View style={home_styles.cardContainer}>
        <ImageBackground
          source={require('../Assets/VisaCard.png')}
          style={home_styles.cardBackground}
          imageStyle={{ borderRadius: 15 }}
        >
          <CustomText style={home_styles.cardCurrency}>Rp {state.saldo.toLocaleString('id-ID')}</CustomText>
          <CustomText style={home_styles.cardLabel}>Total Balance</CustomText>
        </ImageBackground>
      </View>

      <View style={home_styles.space}>
        <View style={home_styles.quickActionContainer}>
          <TouchableOpacity style={home_styles.quickActionButton}>
            <Ionicons name="arrow-up-outline" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>Transfer</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={home_styles.quickActionButton}>
            <Ionicons name="arrow-down-outline" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>Tarik Tunai</CustomText>
          </TouchableOpacity>
          <TouchableOpacity style={home_styles.quickActionButton}>
            <FontAwesome name="ellipsis-h" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>Lebih</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={home_styles.space}>
        <CustomText style={{ fontSize: 24, fontFamily: 'Lato-Black', paddingBottom: 16 }}>Kategori</CustomText>
        <View style={home_styles.quickActionContainer}>
          <TouchableOpacity
            style={home_styles.quickActionButton}
            onPress={() => navigation.navigate('Pulsa')}
          >
            <Ionicons name="phone-portrait-outline" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>Pulsa/Data</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={home_styles.quickActionButton}
            onPress={() => navigation.navigate('PLN')}
          >
            <Ionicons name="flash-outline" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>Listrik</CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={home_styles.quickActionButton}
            onPress={() => navigation.navigate('BPJS')}
          >
            <FontAwesome5 name="shield-alt" size={24} color="#2566a5" />
            <CustomText style={home_styles.quickActionText}>BPJS</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View style={home_styles.space}>
        <View style={[home_styles.flexRow, { paddingBottom: 16 }]}>
          <CustomText style={{ fontSize: 24, fontFamily: 'Lato-Black' }}>Transaksi Terbaru</CustomText>
          <CustomText style={{ fontSize: 14, color: '#2566a5' }}>View All</CustomText>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 19,
            marginLeft: 17,
          }}
        >
          <View>
            
          </View>
        </ScrollView>
      </View>
    </View >
  );
};

export default HomeScreen;
