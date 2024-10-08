import React from 'react';
import { View, ScrollView } from 'react-native';
import HomeCard from './HomeCard';

const JumpBackIn = [
  {
    name: 'No Role Model',
    detail: 'A reflection on personal struggles, fame, and the quest for genuine relationships.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-A.jpg') }],
  },
  {
    name: 'Fein',
    detail: 'A high-energy track that explores the complexities of loyalty and trust in fast-paced life.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-B.jpg') }],
  },
  {
    name: 'Fuck Life',
    detail: 'A raw, unfiltered expression of frustration and rebellion against life\'s challenges.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-C.jpg') }],
  },
  {
    name: 'Can\'t Leave Without It',
    detail: 'A smooth blend of rhythm and lyrics highlighting the importance of loyalty and success.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-D.jpg') }],
  },
  {
    name: 'Ransom',
    detail: 'A catchy anthem about wealth, power, and the pressures that come with it.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-E.jpg') }],
  },
  {
    name: 'Revenge',
    detail: 'A powerful narrative about betrayal and the drive to get even.',
    images: [{ url: require('../Assets/Songs/JumpBackIn-F.jpg') }],
  },
];

const MadeForYou = [
  {
    name: 'Daily Mix 1',
    detail: 'Lil Tecca, Juice WRLD, XXXTENTACION and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-A.jpg') }],
  },
  {
    name: 'Daily Mix 2',
    detail: 'Travis Scott, Drake, Kendrick Lamar and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-B.jpg') }],
  },
  {
    name: 'Daily Mix 3',
    detail: 'keshi, Beyonce, Jeremih, and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-C.jpg') }],
  },
  {
    name: 'Daily Mix 4',
    detail: '21 Savage, Rae Sremmurd, Gucci Mane and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-D.jpg') }],
  },
  {
    name: 'Daily Mix 5',
    detail: 'Jason Derulo, Alan Walker, Shawn Mendes and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-E.jpg') }],
  },
  {
    name: 'Daily Mix 6',
    detail: 'NewJeans, NMIXX, LEE CHAE YEON and more',
    images: [{ url: require('../Assets/Songs/MadeForYou-F.jpg') }],
  },
];

const YourTopMixes = [
  {
    name: 'Hip Hop Mix',
    detail: 'XXXTENTACION, Sleepy Hallow, Drake and more',
    images: [{ url: require('../Assets/Songs/YourTopMixes-A.jpg') }],
  },
  {
    name: 'K-Pop Mix',
    detail: 'LAY, NCT 127, Jackson Wang and more',
    images: [{ url: require('../Assets/Songs/YourTopMixes-B.jpg') }],
  },
  {
    name: '21 Savage Mix',
    detail: 'Gunna, Future and Travis Scottt',
    images: [{ url: require('../Assets/Songs/YourTopMixes-C.jpg') }],
  },
  {
    name: 'Moody Mix',
    detail: 'Juice WRLD, Lil Uzi Vert, Eminem and more',
    images: [{ url: require('../Assets/Songs/YourTopMixes-D.jpg') }],
  },
  {
    name: 'Pop Mix',
    detail: 'The Kid LAROI, Trove Sivan, Alaina Castillo and more',
    images: [{ url: require('../Assets/Songs/YourTopMixes-E.jpg') }],
  },
  {
    name: 'Anson Seabra Mix',
    detail: 'Alexander 23, Hayd and Jaymes Young',
    images: [{ url: require('../Assets/Songs/YourTopMixes-F.jpg') }],
  },
];

const RecentData = [
  {
    name: 'Hip-Hop Songs',
    detail: 'Hip-hop hits from various artists including Lil Wayne, Drake, and more.',
    images: [{ url: require('../Assets/Songs/Recent-A.jpg') }],
  },
  {
    name: 'Slow Vibes',
    detail: 'Chill and relaxing vibes to help you unwind, featuring top artists.',
    images: [{ url: require('../Assets/Songs/Recent-B.jpg') }],
  },
  {
    name: 'Liked Songs',
    detail: 'All your favorite songs in one playlist, curated just for you.',
    images: [{ url: require('../Assets/LikedSongs.png') }],
  },
  {
    name: 'Keshi',
    detail: 'Top songs from Keshi, blending pop and R&B.',
    images: [{ url: require('../Assets/Songs/Recent-C.jpg') }],
  },
  {
    name: 'Chinese Songs',
    detail: 'Popular Chinese tracks from a variety of genres and artists.',
    images: [{ url: require('../Assets/Songs/Recent-D.jpg') }],
  },
  {
    name: 'Slow Songs',
    detail: 'Easy-listening and slow tempo songs to relax and enjoy.',
    images: [{ url: require('../Assets/Songs/Recent-E.jpg') }],
  },
  {
    name: 'IDK',
    detail: 'A collection of the best hits from IDK, an eclectic mix of rap and melody.',
    images: [{ url: require('../Assets/Songs/Recent-F.jpg') }],
  },
  {
    name: 'Eric Chou',
    detail: 'Ballads and love songs from Taiwanese singer-songwriter Eric Chou.',
    images: [{ url: require('../Assets/Songs/Recent-G.jpg') }],
  },
];


const getData = (dataType) => {
  switch (dataType) {
    case 'A':
      return JumpBackIn;
    case 'B':
      return MadeForYou;
    case 'C':
      return RecentData;
    case 'D':
      return YourTopMixes;
    default:
      return JumpBackIn;
  }
};

const HomeList = ({ dataType }) => {
  const data = getData(dataType);

  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        {data.map((item, index) => (
          <HomeCard key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeList;