import { StyleSheet } from 'react-native';

const success_styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successBackground: {
        backgroundColor: '#2566A5',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 80,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        color: '#F0F0F0',
        marginBottom: 10,
    },
    infoText: {
        color: '#F0F0F0',
        fontSize: 16,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
    },
    priceText: {
        color: '#F0F0F0',
        textAlign: 'center',
        fontFamily: 'Lato-Black',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#F0F0F0',
        borderRadius: 30,
        paddingVertical: 12,
        marginBottom: 10,
        width: '85%',
        alignItems: 'center',
    },
    detailButton: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        fontSize: 16,
    },
});

export default success_styles;