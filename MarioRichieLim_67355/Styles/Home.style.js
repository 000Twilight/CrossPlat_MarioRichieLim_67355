const home_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9F9',
        paddingHorizontal: 24,
        paddingTop: 24,
    },

    // Top Styles
    flexTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    logoAndText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 64,
        height: 64,
        marginLeft: -10,
    },
    topText: {
        fontSize: 24,
        fontFamily: 'Lato-Black',
        marginLeft: -9,
        marginBottom: -18,
        color: '#2566a5',
    },
    topProfile: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },


    // Visa Card Styles
    cardContainer: {
        marginTop: 20,
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardBackground: {
        width: '100%',
        height: 200,
        justifyContent: 'space-between',
        padding: 16,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardChip: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 16,
        right: 16,
    },
    cardCurrency: {
        fontSize: 24,
        fontFamily: 'Lato-Black',
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 30,
        left: 16,
    },
    cardLabel: {
        fontSize: 14,
        color: '#FFFFFF',
        position: 'absolute',
        bottom: 10,
        left: 16,
    },


    // Quick Action Styles
    quickActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F1F3F4',
        padding: 16,
        borderRadius: 15,
        marginTop: 20,
    },
    quickActionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '30%', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    quickActionText: {
        fontSize: 14,
        marginTop: 8,
    },
});

export default home_styles;