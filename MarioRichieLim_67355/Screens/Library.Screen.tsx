import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import library_styles from '../Styles/LibraryScreen.style';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from '../Components/CustomHeader';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const playlists = [
  {
    id: '1', title: 'Liked Songs', detail: 'Playlists • 429 Songs', detailText: true,
    isDownloaded: true, image: require('../Assets/LikedSongs.png')
  },
  {
    id: '2', title: 'New Episodes', detail: 'Updated 25 Sept 2024', detailText: true,
    isDownloaded: true, image: require('../Assets/LikedSongs.png')
  },
  {
    id: '3', title: 'Aura', detail: 'Playlists • Twilight MRL', detailText: true,
    isDownloaded: true, image: require('../Assets/Songs/Recent-A.jpg')
  },
  {
    id: '4', title: 'Damn', detail: 'Playlists • Twilight MRL', detailText: true,
    isDownloaded: true, image: require('../Assets/Songs/Recent-B.jpg')
  },
  {
    id: '5', title: 'Goods', detail: 'Playlists • Twilight MRL', detailText: true,
    isDownloaded: true, image: require('../Assets/Songs/Recent-C.jpg')
  },
  {
    id: '6', title: 'Praise', detail: 'Playlists • Twilight MRL', detailText: true,
    isDownloaded: false, image: require('../Assets/Songs/Recent-D.jpg')
  },
  {
    id: '7', title: 'OfflineTV Podcast', detail: 'Podcast • 7EQUIS / OfflineTV', detailText: true,
    isDownloaded: false, image: require('../Assets/offline_tv.png')
  },
  {
    id: '8', title: 'Add artists', detail: null, detailText: false,
    isDownloaded: false, image: require('../Assets/plus-circle.png')
  },
  {
    id: '9', title: 'Add podcasts', detail: null, detailText: false,
    isDownloaded: false, image: require('../Assets/plus-square.png')
  },
];

const PlaylistItem = ({ title, detail, isDownloaded, image, detailText }) => {
  return (
    <View style={library_styles.playlistItem}>
      <Image source={image} style={{ width: 65, height: 65 }} />

      <View style={library_styles.playlistText}>
        <Text style={library_styles.playlistTitle}>{title}</Text>
        {detailText && (
          <View style={library_styles.flexRow}>
            {isDownloaded && (
              <Octicons name="arrow-down" size={8.8} color="black" style={library_styles.downloadIcon} />
            )}
            <Text style={library_styles.playlistSubtitle}>{detail}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const LibraryScreen = ({ navigation }) => {
  const rightIcons = [
    {
      onPress: () => console.log('Search icon pressed'),
      icon: <Icon name="search-outline" size={26} marginTop={3} color={'white'} />,
    },
    {
      onPress: () => console.log('Add icon pressed'),
      icon: <Icon name="add-outline" size={34} marginLeft={18} marginRight={-3} color={'white'} />,
    },
  ];

  return (
    <View style={library_styles.container}>
      <CustomHeader
        navigation={navigation}
        title="Your Library"
        activeButton={null}
        middleButtons={null}
        rightIcons={rightIcons}
      />

      {/* Top Menu (Playlists, Podcasts, Downloaded) */}
      <View style={library_styles.section}>
        <View style={library_styles.flexRow}>
          <TouchableOpacity style={library_styles.menuButton}>
            <Text style={library_styles.menuText}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style={library_styles.menuButton}>
            <Text style={library_styles.menuText}>Podcasts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={library_styles.menuButton}>
            <Text style={library_styles.menuText}>Downloaded</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {/* Recents Section */}
        <View style={library_styles.section}>
          <View style={[library_styles.flexRow, library_styles.headerRow]}>
            <View style={library_styles.flexRow}>
              <FontAwesome6 name="arrow-down-long" size={10} color="white" />
              <FontAwesome6 name="arrow-up-long" size={10} style={{ marginLeft: -2, marginRight: 5 }} color="white" />
              <Text style={library_styles.recentsTitle}>Recents</Text>
            </View>
            <MaterialIcons name="grid-view" size={16} color="white" />
          </View>
        </View>

        {/* Playlist Section */}
        <View style={{ paddingHorizontal: 15 }}>
          <FlatList
            data={playlists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlaylistItem
                title={item.title}
                detail={item.detail}
                isDownloaded={item.isDownloaded}
                image={item.image}
                detailText={item.detailText}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LibraryScreen;