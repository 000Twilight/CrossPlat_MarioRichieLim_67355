import { StyleSheet } from 'react-native';

const history_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    transactionItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    traceNumber: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
    },
    date: {
        color: '#888',
        marginTop: 5,
    },
    amount: {
        fontFamily: 'Lato-Bold',
        marginTop: 5,
    },
    successStatus: {
        color: 'green',
        marginTop: 5,
    },
    failedStatus: {
        color: 'red',
        marginTop: 5,
    },
    noTransactionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default history_styles;