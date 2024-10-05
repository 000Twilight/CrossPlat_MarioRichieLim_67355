import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../Components/CustomHeader';
import search_styles from '../Styles/SearchScreen.style';
import BrowseButton from '../Components/BrowseButton';

const browseButtonsData = [
  { backgroundColor: "#FF6F91", text: "Made For You" },
  { backgroundColor: "#2C6E49", text: "New Releases" },
  { backgroundColor: "#6A4C93", text: "Pop" },
  { backgroundColor: "#0077B6", text: "Indie" },
  { backgroundColor: "#FF5A5F", text: "Musik Indonesia" },
  { backgroundColor: "#52796F", text: "K-pop" },
  { backgroundColor: "#E07A5F", text: "Podcast Charts" },
  { backgroundColor: "#3D5A80", text: "Podcast New Releases" },
  { backgroundColor: "#B56576", text: "View Podcast" },
  { backgroundColor: "#4682B4", text: "Only on Spotify" },
  { backgroundColor: "#9A8C98", text: "Charts" },
  { backgroundColor: "#293241", text: "In the car" },
  { backgroundColor: "#A23B72", text: "Hip-Hop" },
  { backgroundColor: "#5A189A", text: "Rock" },
  { backgroundColor: "#2A9D8F", text: "R&B" },
  { backgroundColor: "#F4A261", text: "Discover" },
  { backgroundColor: "#E63946", text: "Radio" },
  { backgroundColor: "#1D3557", text: "Dance/Electronic" },
  { backgroundColor: "#A8DADC", text: "Mood" },
  { backgroundColor: "#457B9D", text: "Sleep" },
];

const SearchScreen = ({ navigation }) => {
  const rightIcons = [
    {
      onPress: () => console.log('Search icon pressed'),
      icon: <Icon name="camera-outline" size={28} color={'white'} />,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        navigation={navigation}
        title="Search"
        activeButton={null}
        rightIcons={rightIcons}
        middleButtons={null}
      />

      <ScrollView style={search_styles.container}>

        {/* Search Bar */}
        <View style={search_styles.searchBarContainer}>
          <Icon name="search-outline" size={26} style={search_styles.searchIcon} />
          <TextInput
            style={search_styles.searchBar}
            placeholder="What do you want to listen to?"
            placeholderTextColor="#292929"
          />
        </View>

        {/* Start Browsing Section */}
        <View style={search_styles.section}>
          <Text style={search_styles.sectionTitle}>Start browsing</Text>
          <View style={search_styles.browseRow}>
            <TouchableOpacity style={[search_styles.browseButton, { backgroundColor: '#FF006E' }]}>
              <Text style={search_styles.browseText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[search_styles.browseButton, { backgroundColor: '#0E7C42' }]}>
              <Text style={search_styles.browseText}>Podcasts</Text>
            </TouchableOpacity>
          </View>
          <View style={search_styles.browseRow}>
            <TouchableOpacity style={[search_styles.browseButton2, { backgroundColor: '#8A2BE2' }]}>
              <Text style={search_styles.browseText}>Live Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[search_styles.browseButton2, { backgroundColor: '#0056D6' }]}>
              <Text style={search_styles.browseText}>K-Pop ON! {"\n"}Hub</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore Genres Section */}
        <View style={search_styles.section}>
          <Text style={[search_styles.sectionTitle, { marginTop: -8 }]}>Explore your genres</Text>
          <View style={search_styles.genreScroll}>
            <TouchableOpacity style={search_styles.genreCard}>
              <Text style={search_styles.genreText}>#profound</Text>
            </TouchableOpacity>
            <TouchableOpacity style={search_styles.genreCard}>
              <Text style={search_styles.genreText}>#hopeless {"\n"}romantic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={search_styles.genreCard}>
              <Text style={search_styles.genreText}>#c-pop</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Browse All Section */}
        <View style={search_styles.section}>
          <Text style={search_styles.sectionTitle}>Browse All</Text>
          <View style={search_styles.browseRowAll}>
            {browseButtonsData.map((item, index) => (
              <BrowseButton
                key={index} // Unique key for each component
                backgroundColor={item.backgroundColor}
                text={item.text}
              />
            ))}
          </View>
        </View>

      </ScrollView>

    </View>
  );
};

export default SearchScreen;
