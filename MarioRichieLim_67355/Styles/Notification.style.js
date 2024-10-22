import { StyleSheet } from 'react-native';

const notification_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    listContainer: {
        padding: 8,
    },
    card: {
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
    cardTitle: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
    },
});

export default notification_styles;