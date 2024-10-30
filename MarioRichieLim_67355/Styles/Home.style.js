import { StyleSheet } from 'react-native';

const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    card: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        fontSize: 14,
        marginTop: 5,
        color: '#6c757d',
    },
});

export default home_styles;