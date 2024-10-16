import React from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
import CustomText from '../Components/CustomText';
import profile_styles from '../Styles/Profile.style';
import CategoryHeader from '../Components/CategoryHeader';

const ProfileScreen = () => {
  return (
    <View style={profile_styles.container}>
      <CategoryHeader title="Profile" />
      <View style={profile_styles.profileContainer}>
        <Image source={require('../Assets/Profile.jpeg')} style={profile_styles.profileImage} />
        <CustomText style={profile_styles.profileText}>Mario Richie Lim</CustomText>
        <CustomText style={profile_styles.profileText}>00000067355</CustomText>
      </View>
      <CustomText style={profile_styles.versionText}>App Version 16.10.2024</CustomText>
    </View>
  );
};

export default ProfileScreen;
