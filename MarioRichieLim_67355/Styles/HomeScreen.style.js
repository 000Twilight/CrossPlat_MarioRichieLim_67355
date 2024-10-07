import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0d0d0d",
    },
    RecentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 13,
        marginRight: 5,
    },
    RecentGrid: {
        width: '50%',
        paddingHorizontal: 5,
        paddingBottom: 8,
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