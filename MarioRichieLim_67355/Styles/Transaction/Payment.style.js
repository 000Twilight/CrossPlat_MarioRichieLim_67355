import { StyleSheet } from 'react-native';

const payment_styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
    },
    topContainer: {
        backgroundColor: '#F0F0F0', 
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'column',
        marginLeft: 14,
    },
    operatorText: {
        fontSize: 16,
        fontFamily: 'Lato-Bold',
    },
    phoneText: {
        fontSize: 14,
    },
    priceText: {
        fontSize: 16,
        fontFamily: 'Lato-Black',
    },


    subTitle: {
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 10,
        fontFamily: 'Lato-Black',
    },
    detailContainer: {
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    saldoText: {
        fontSize: 16,
    },
    detailText: {
        fontSize: 15,
    },
    detailText2: {
        fontSize: 14,
    },

    buttonConfirm: {
        backgroundColor: '#2566A5',
        borderRadius: 15,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        width: '90%',
        bottom: 40,
    },
});


export default payment_styles;
