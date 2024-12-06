import { StyleSheet } from 'react-native';

const restaurantNearYou_style = StyleSheet.create({
    container: {
        padding: 20,
    },
    
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 6,
    },
    
    button: {
        backgroundColor: '#FFB001',
        padding: 6,
        width: '40%',
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
    },

    // Card style for restaurant
    restaurantCard: {
        backgroundColor: '#FFB001',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        overflow: 'hidden',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 10,
        marginRight: 12,
    },
    infoWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 10,
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    restaurantLocation: {
        fontSize: 13,
        color: '#333',
    }
});

export default restaurantNearYou_style;