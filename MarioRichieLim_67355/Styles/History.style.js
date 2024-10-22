import { StyleSheet } from 'react-native';

const history_styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    transactionItem: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 28,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    transactionText: {
        fontSize: 16,
    },
});

export default history_styles;