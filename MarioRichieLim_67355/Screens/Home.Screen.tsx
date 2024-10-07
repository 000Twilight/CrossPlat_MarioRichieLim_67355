// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image, Pressable, Animated } from 'react-native';
// import home_styles from '../Styles/HomeScreen.style';
// import { LinearGradient } from 'expo-linear-gradient';
// import JumpBackInList from '../Components/JumpBackList';
// import CustomHeader from '../Components/CustomHeader';

// const HomeScreen = ({ navigation }) => {
//   const [activeButton, setActiveButton] = useState('All');

//   const RecentData = [
//     { id: 1, text: "Hip-Hop Songs", image: require('../Assets/Songs/Recent-A.jpg') },
//     { id: 2, text: "Slow Vibes", image: require('../Assets/Songs/Recent-B.jpg') },
//     { id: 3, text: "Liked Songs", image: require('../Assets/LikedSongs.png') },
//     { id: 4, text: "Keshi", image: require('../Assets/Songs/Recent-C.jpg') },
//     { id: 5, text: "Chinese Songs", image: require('../Assets/Songs/Recent-D.jpg') },
//     { id: 6, text: "Slow Songs", image: require('../Assets/Songs/Recent-E.jpg') },
//     { id: 7, text: "IDK", image: require('../Assets/Songs/Recent-F.jpg') },
//     { id: 8, text: "Eric Chou", image: require('../Assets/Songs/Recent-G.jpg') },
//   ];

//   const middleButtons = [
//     {
//       name: 'All',
//       onPress: () => setActiveButton('All'),
//     },
//     {
//       name: 'Music',
//       onPress: () => setActiveButton('Music'),
//     },
//     {
//       name: 'Podcasts',
//       onPress: () => setActiveButton('Podcasts'),
//     },
//   ];

//   return (
//     // <Animated.View style={{ flex: 1, backgroundColor: '#0d0d0d', opacity: fadeAnim }}>
//     <View style={home_styles.container}>
//       <CustomHeader
//         title={''}
//         navigation={navigation}
//         middleButtons={middleButtons}
//         activeButton={activeButton} // Pass active button to CustomHeader
//         rightIcons={null} // No icons on the right
//       />
//       <ScrollView>
//         <View style={home_styles.RecentContainer}>
//           {RecentData.map((item) => (
//             <View key={item.id} style={home_styles.RecentGrid}>
//               <Pressable
//                 onPress={() => navigation.navigate("Liked")}
//                 style={home_styles.RecentItem}
//               >
//                 <View style={home_styles.RecentImageContainer}>
//                   <Image source={item.image} style={home_styles.RecentImage} />
//                 </View>
//                 <Text style={home_styles.RecentText}>{item.text}</Text>
//               </Pressable>
//             </View>
//           ))}
//         </View>

//         <Text
//           style={{
//             color: "white",
//             fontSize: 24,
//             fontWeight: "900",
//             marginLeft: 17,
//             marginTop: 17,
//           }}
//         >
//           Jump back in
//         </Text>

//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={{
//             marginTop: 19,
//             marginLeft: 17,
//           }}
//         >
//           <JumpBackInList />
//         </ScrollView>

//         {/* Made for you */}
//         <Text
//           style={{
//             color: "white",
//             fontSize: 24,
//             fontWeight: "900",
//             marginLeft: 17,
//             marginTop: 17,
//           }}
//         >
//           Made For You
//         </Text>

//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={{
//             marginTop: 19,
//             marginLeft: 17,
//           }}
//         >
//           <JumpBackInList />
//         </ScrollView>

//         {/* Recent */}
//         <Text
//           style={{
//             color: "white",
//             fontSize: 24,
//             fontWeight: "900",
//             marginLeft: 17,
//             marginTop: 17,
//           }}
//         >
//           Recents
//         </Text>

//         <ScrollView>

//         </ScrollView>

//         {/* Your top mixes */}
//         <Text
//           style={{
//             color: "white",
//             fontSize: 24,
//             fontWeight: "900",
//             marginLeft: 17,
//             marginTop: 17,
//           }}
//         >
//           Your top mixes
//         </Text>

//         <ScrollView>

//         </ScrollView>

//         {/* Recommended Stations */}
//         <Text
//           style={{
//             color: "white",
//             fontSize: 24,
//             fontWeight: "900",
//             marginLeft: 17,
//             marginTop: 17,
//           }}
//         >
//           Your top mixes
//         </Text>

//         <ScrollView>

//         </ScrollView>


//       </ScrollView>
//       {/* </Animated.View > */}
//     </View>
//   );
// };

// export default HomeScreen;