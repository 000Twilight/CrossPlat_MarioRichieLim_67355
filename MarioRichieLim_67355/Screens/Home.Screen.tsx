import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import home_styles from '../Styles/Home.style';
import CustomText from '../Components/CustomText';
import { ImageBackground } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={home_styles.container}>
      <View style={home_styles.flexTop}>
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
          <View style={home_styles.cardContent}>
            <Image
              source={require('../Assets/Chip.png')}
              style={home_styles.cardChip}
            />
            <CustomText style={home_styles.cardCurrency}>Rp 1.000.000</CustomText>
            <CustomText style={home_styles.cardLabel}>Total Balance</CustomText>
          </View>
        </ImageBackground>
      </View>

      <View>
        {/* <CustomText style={{ fontSize: 24, fontFamily: 'Lato-Black ' }}>Quick Action</CustomText> */}
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
            <CustomText style={home_styles.quickActionText}>More</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <CustomText style={{ fontSize: 24, fontFamily: 'Lato-Black ' }}>Categories</CustomText>
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
            <CustomText style={home_styles.quickActionText}>More</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={home_styles.flexTop}>
          <CustomText style={{ fontSize: 24, fontFamily: 'Lato-Black ' }}>Recent Transactions</CustomText>
          <CustomText style={{ fontSize: 16, color: '#2566a5' }}>View All</CustomText>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 19,
            marginLeft: 17,
          }}
        >
          <View></View>
        </ScrollView>
      </View>
    </View >
  );
};

export default HomeScreen;
