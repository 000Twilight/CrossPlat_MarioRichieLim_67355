import { act } from 'react';
import { StyleSheet } from 'react-native';

const frontend_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 220,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    logoSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 46,
        fontWeight: 'bold',
        marginLeft: 10
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginRight: 15,
        height: 40,
        width: 180,
    },
    searchIcon: {
        position: 'absolute',
        right: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontSize: 16,
    },
    cartButton: {
        backgroundColor: '#ff9917',
        padding: 12,
        paddingHorizontal: 30,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    cartButtonText: {
        color: 'white',
    },
    navbar2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    activeNav: {
        backgroundColor: '#1a79ce',
        alignItems: 'center',
        width: '12%',
        paddingVertical: 16,
    },
    inactiveNav: {
        backgroundColor: '#1f88e6',
        alignItems: 'center',
        width: '22%',
        paddingVertical: 16,
    },
    navText: {
        fontSize: 14,
        fontWeight: 'semibold',
        color: 'white',
    },

    bannerContainer: {
        // position: 'relative',
        paddingTop: 30,
    },
    banner: {
        width: '100%',
        height: 350,
    },
    textBanner: {
        // position: 'absolute',
        // top: 50,
        // left: '18%',
        color: 'white',
        fontSize: 32,
        letterSpacing: 2,
    },

});

export default frontend_styles;