import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    space: {
        paddingTop: 24,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    // Top Styles
    logoAndText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 64,
        height: 64,
        marginLeft: -10,
    },
    topText: {
        fontSize: 24,
        fontFamily: 'Lato-Black',
        marginLeft: -9,
        marginBottom: -18,
        color: '#2566A5',
    },
    topProfile: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },


    // Visa Card Styles
    cardContainer: {
        marginTop: 10,
    },
    cardBackground: {
        width: 365,
        height: 200,
    },
    cardCurrency: {
        fontSize: 24,
        fontFamily: 'Lato-Black',
        color: '#F0F0F0',
        position: 'absolute',
        bottom: 40,
        left: 16,
    },
    cardLabel: {
        fontSize: 14,
        color: '#F0F0F0',
        position: 'absolute',
        bottom: 20,
        left: 16,
    },


    // Quick Action Styles
    quickActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
    },
    quickActionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: 12,
        padding: 16,
        width: '30%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quickActionText: {
        fontSize: 14,
        marginTop: 8,
    },

    // Card
    transactionCard: {
        backgroundColor: '#F0F0F0', 
        borderRadius: 10,
        paddingVertical: 14,
        paddingLeft: 16,
        paddingRight: 24,
        marginRight: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    transactionType: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
    transactionPrice: {
        fontSize: 15,
        color: '#2566A5',
        marginVertical: 4,
    },
    transactionDate: {
        fontSize: 13,
    },
});

export default home_styles;