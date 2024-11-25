import { StyleSheet } from 'react-native';

const online_order_styles = StyleSheet.create({
    paddingApp: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
    },


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
    cardOrder: {
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
        // elevation: 2,
    },
    imageOrder: {
        width: 200,
        height: 200,
    },
    cardContent: {
        padding: 10,
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },

    spaceDown: {
        padding: 50,
    },
});

export default online_order_styles;