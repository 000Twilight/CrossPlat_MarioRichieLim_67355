import { StyleSheet } from 'react-native';

const PIN_styles = StyleSheet.create({
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Lato-Black',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 25,
    },
    pinContainer: {
        flexDirection: 'row',
    },
    pinDot: {
        width: 30,
        height: 30,
        borderRadius: 15,
        margin: 5,
        backgroundColor: '#E0E0E0',
    },
    pinDotFilled: {
        backgroundColor: 'blue',
    },
    hiddenInput: {
        height: 0,
        width: 0,
        opacity: 0,
        position: 'absolute',
    },
});

export default PIN_styles;