import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        paddingHorizontal: 20,
        paddingTop: 32,

    },
    logo: {
        width: 64,
        height: 64,
        marginRight: 8,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    topText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    userInfoCard: {
        backgroundColor: '#F8F9F9',
        borderRadius: 10,
        padding: 16,
        marginBottom: 20,

        elevation: 2, // shadow for Android
        shadowColor: '#000', // shadow for iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    userNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },

    horizontalDivider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: '#E0E0E0',
    },


    transactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        marginTop: 8,
        fontSize: 14,
        color: '#333',
    },
    quickAccessRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    quickAccessButton: {
        alignItems: 'center',
        width: '30%',
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 8,
    },
    offerBanner: {
        backgroundColor: '#333', // Darker color for the banner
        borderRadius: 10,
        padding: 16,
        alignItems: 'center',
    },
    offerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
    offerDetails: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
});

export default home_styles;