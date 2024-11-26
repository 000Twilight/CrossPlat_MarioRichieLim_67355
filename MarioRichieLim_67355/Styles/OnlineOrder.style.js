import { StyleSheet } from 'react-native';

const online_order_styles = StyleSheet.create({
    paddingApp: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 14,
    },

    // Categories Section
    scrollContainerCategory: {
        paddingRight: 16,
        alignItems: 'center',
    },
    itemContainerCategory: {
        marginHorizontal: 8,
        alignItems: 'center',
    },
    imageCategory: { // Renamed for clarity
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textCategory: { // Renamed for clarity
        marginTop: 8,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },

    // Order Now Section
    orderNowSection: {
        marginTop: 10,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    orderNowTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardOrderNow: {
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'flex-start',
        // elevation: 2,
    },
    imageOrderNow: {
        width: 300,
        height: 200,
    },
    cardTitleOrderNow: {
        fontSize: 16,
        fontWeight: '600',
    },
    cardSubtitleOrderNow: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },

    // Restaurants Section
    scrollContainerRestaurants: {
        paddingLeft: 4,
        paddingRight: 12,
        paddingBottom: 14,
    },
    cardRestaurants: {
        backgroundColor: 'white',
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 16,
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        width: 200,
    },
    imageRestaurants: {
        width: '100%',
        height: 120,
    },
    contentRestaurants: {
        padding: 12,
    },
    titleRestaurants: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    ratingContainerRestaurants: {
        flexDirection: 'row',
        marginBottom: 4,
    },
    starRestaurants: {
        color: '#FFE500',
        fontSize: 20,
        fontWeight: 'bold',
    },
    detailsRestaurants: {
        fontSize: 12,
        marginBottom: 8,
    },
    tagContainerRestaurants: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
    },
    tagRestaurants: {
        backgroundColor: '#77A84C',
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    tagTextRestaurants: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    
});

export default online_order_styles;