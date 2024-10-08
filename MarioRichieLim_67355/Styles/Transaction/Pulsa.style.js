import { StyleSheet } from 'react-native';

const pulsa_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Black',
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,

    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    textInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        color: '#333',
    },
    inputIcon: {
        width: 24,
        height: 24,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#E0E0E0',
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
        backgroundColor: '#333',
    },
    activeTabText: {
        color: '#FFF',
        fontFamily: 'Lato-Black',
    },
    inactiveTabText: {
        color: '#333',

    },
    messageContainer: {
        flexDirection: 'row',
        backgroundColor: '#F1F3F4',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    messageIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    messageText: {
        fontSize: 14,
        color: '#333',
    },

    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },


    topUpRow: {
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    topUpBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    topUpAmount: {
        fontSize: 16,
        fontFamily: 'Lato-Black',
        color: '#333',
    },
    topUpPrice: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
        fontFamily: 'Lato-Regular',
    },
});

export default pulsa_styles;
