import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#0d0d0d',
    // },


    // container: {
    //     flex: 1,
    //     backgroundColor: '#121212',
    //     paddingHorizontal: 10,
    // },
    // header: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     paddingVertical: 15,
    // },
    // title: {
    //     color: 'white',
    //     fontSize: 16,
    // },
    // playlistSection: {
    //     marginBottom: 20,
    // },
    // playlistRow: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     marginBottom: 10,
    // },
    // playlistButton: {
    //     flex: 1,
    //     backgroundColor: '#2e2e2e', // Adjust for inactive buttons
    //     padding: 15,
    //     borderRadius: 5,
    //     marginHorizontal: 5,
    // },
    // playlistText: {
    //     color: 'white',
    //     textAlign: 'center',
    // },
    // sectionHeader: {
    //     color: 'white',
    //     fontSize: 18,
    //     marginBottom: 10,
    // },
    // jumpBackInSection: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    // albumCover: {
    //     width: 100,
    //     height: 100,
    //     borderRadius: 5,
    // },
    // banner: {
    //     backgroundColor: '#6a0dad', // Adjust as per the banner color
    //     padding: 20,
    //     marginVertical: 20,
    //     borderRadius: 5,
    //     alignItems: 'center',
    // },
    // bannerText: {
    //     color: 'white',
    //     fontSize: 16,
    // },
    // bannerSubtext: {
    //     color: '#00ff00',
    //     fontSize: 12,
    // },

    RecentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 13,
        marginRight: 5,
    },
    RecentGrid: {
        width: '50%',
        padding: 5,
    },
    RecentItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        flex: 1,
        backgroundColor: "#202020",
        borderRadius: 5,
    },
    RecentImageContainer: {
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    RecentImage: {
        width: "100%",
        height: "100%",
    },
    RecentText: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold",
    },
});

export default home_styles;