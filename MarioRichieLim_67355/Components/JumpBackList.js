import React from 'react';
import { View, ScrollView } from 'react-native';
import JumpBackInCard from './JumpBackInCard'; // Adjust the path as needed

const JumpBackInData = [
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

const JumpBackInList = () => {
  return (
    <ScrollView horizontal>
      <View style={{ flexDirection: 'row' }}>
        {JumpBackInData.map((item, index) => (
          <JumpBackInCard key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default JumpBackInList;