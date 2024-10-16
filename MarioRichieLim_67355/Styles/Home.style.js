import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
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
        color: '#2566a5',
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
        color: '#F8F9F9',
        position: 'absolute',
        bottom: 40,
        left: 16,
    },
    cardLabel: {
        fontSize: 14,
        color: '#F8F9F9',
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
        backgroundColor: '#F8F9F9',
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
});

export default home_styles;