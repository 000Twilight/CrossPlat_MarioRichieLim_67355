import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        paddingHorizontal: 24,
        paddingTop: 24,
    },

    // Top Styles
    flexTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
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
        borderRadius: 15,
    },
    cardBackground: {
        width: 365,
        height: 200,
    },
    cardCurrency: {
        fontSize: 24,
        fontFamily: 'Lato-Black',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 40,
        left: 16,
    },
    cardLabel: {
        fontSize: 14,
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 20,
        left: 16,
    },


    // Quick Action Styles
    quickActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginVertical: 20,
    },
    quickActionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
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