import { StyleSheet } from 'react-native';

const pulsa_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
    },
    contentContainer: {
        padding: 20,
    },

    // Top Styles
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Black',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    textInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },


    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#e9eeff',
        borderRadius: 10,
        marginBottom: 20,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    activeTab: {
        backgroundColor: '#2566a5',
        borderWidth: 1,
        borderColor: '#2566a5',
    },
    activeTabText: {
        color: '#FFF',
        fontFamily: 'Lato-Bold',
    },
    inactiveTabText: {
        color: '#2566a5',
    },


    messageContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F3F4',
        paddingLeft: 15,
        paddingVertical: 15,
        paddingRight: 50,
        borderRadius: 10,
        alignItems: 'center',
    },
    messageIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },


    topUpRow: {
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 10,
    },
    topUpBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e9eeff',
    },
    topUpPriceFirst: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
    topUpPrice: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
});

export default pulsa_styles;
