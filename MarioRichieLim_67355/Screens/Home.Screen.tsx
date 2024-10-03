import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import home_styles from '../Styles/HomeScreen.style';
import { LinearGradient } from 'expo-linear-gradient';
import JumpBackInList from '../Components/JumpBackList';

const HomeScreen = ({ navigation }) => {
  const RecentData = [
    { id: 1, text: "Hip-Hop Songs", image: require('../Assets/Songs/Recent-A.jpg') },
    { id: 2, text: "Slow Vibes", image: require('../Assets/Songs/Recent-B.jpg') },
    { id: 3, text: "Liked Songs", image: require('../Assets/LikedSongs.png') },
    { id: 4, text: "Keshi", image: require('../Assets/Songs/Recent-C.jpg') },
    { id: 5, text: "Chinese Songs", image: require('../Assets/Songs/Recent-D.jpg') },
    { id: 6, text: "Slow Songs", image: require('../Assets/Songs/Recent-E.jpg') },
    { id: 7, text: "IDK", image: require('../Assets/Songs/Recent-F.jpg') },
    { id: 8, text: "Eric Chou", image: require('../Assets/Songs/Recent-G.jpg') },
  ];

  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 15 }}>
        <View style={home_styles.RecentContainer}>
          {RecentData.map((item) => (
            <View key={item.id} style={home_styles.RecentGrid}>
              <Pressable
                onPress={() => navigation.navigate("Liked")}
                style={home_styles.RecentItem}
              >
                <LinearGradient colors={["#33006F", "#FFFFFF"]}>
                  <View style={home_styles.RecentImageContainer}>
                    <Image source={item.image} style={home_styles.RecentImage} />
                  </View>
                </LinearGradient>
                <Text style={home_styles.RecentText}>{item.text}</Text>
              </Pressable>
            </View>
          ))}
        </View>

        {/* <FlatList
          data={recentlyplayed}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        /> */}

        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "900",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Jump back in
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <JumpBackInList />
        </ScrollView>

        {/*<View style={{ height: 10 }} />
        <Text
          style={{
            color: "white",
            fontSize: 19,
            fontWeight: "bold",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          Recently Played
        </Text>
        <FlatList
          data={recentlyplayed}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <RecentlyPlayedCard item={item} key={index} />
          )}
        /> */}
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

{/* <ScrollView style={home_styles.container}>
      <View style={home_styles.playlistSection}>
        <View style={home_styles.playlistRow}>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Aura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Hip-Hop Songs #1</Text>
          </TouchableOpacity>
        </View>
        <View style={home_styles.playlistRow}>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Liked Songs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Damn</Text>
          </TouchableOpacity>
        </View>
        <View style={home_styles.playlistRow}>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Goods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={home_styles.playlistButton}>
            <Text style={home_styles.playlistText}>Slow C</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={home_styles.sectionHeader}>Jump back in</Text>
      <View style={home_styles.jumpBackInSection}>
        <Image
          source={{  }}
          style={home_styles.albumCover}
        />
        <Image
          source={{  }}
          style={home_styles.albumCover}
        />
      </View>
    </ScrollView> */}