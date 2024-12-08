import { act } from 'react';
import { StyleSheet } from 'react-native';

const frontend_styles = StyleSheet.create({
    container: {
        display: 'flex',
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
        position: 'relative',
        paddingTop: 30,
    },
    banner: {
        width: '100%',
        height: 350,
    },
    textBanner: {
        position: 'absolute',
        top: 60,
        left: '17%',
        color: 'white',
        fontSize: 32,
        letterSpacing: 2,
        fontWeight: 'bold',
    },
    boxBannerContainer: {
        position: 'absolute',
        top: 120,
        left: '17%',
        flexDirection: 'row',
    },
    dropdownBannerContainer: {
        position: 'absolute',
        top: 180,
        left: '17%',
        width: 842,
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        backgroundColor: 'white',
    },

    featuredProducts: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    
    productCard: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        width: 250,
    },
    productImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        backgroundColor: '#d0d8db',
    },
    productName: {
        fontSize: 16,
        marginVertical: 7,
    },
    subProductName: {
        fontSize: 12,
        marginVertical: 5,
        color: '#777',
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subProductPrice: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 9,
        marginBottom: -3,
    },
    addButtonFeatured: {
        backgroundColor: '#ff9917',
        padding: 10,
    },
    addButtonTextFeatured: {
        color: 'white',
        fontWeight: 500,
        textAlign: 'center',
    }
});

export default frontend_styles;