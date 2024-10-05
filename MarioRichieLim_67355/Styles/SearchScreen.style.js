import { StyleSheet } from 'react-native';

const search_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    searchBarContainer: {
        padding: 11,
        flexDirection: 'row',
        backgroundColor: 'white',
        color: '#fff',
        borderRadius: 4,
        marginHorizontal: 15,
        marginTop: 6,
    },
    searchIcon: {
        marginRight: 10,
        color: 'black',
    },
    searchBar: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#292929',
    },

    section: {
        padding: 15,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 14,
    },
    browseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    browseButton: {
        paddingTop: 10,
        paddingBottom: 32,
        paddingLeft: 12,
        borderRadius: 6,
        width: '48%',
    },
    browseButton2: {
        paddingTop: 10,
        paddingBottom: 16,
        paddingLeft: 12,
        borderRadius: 6,
        width: '48%',
    },
    browseText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    genreScroll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    genreCard: {
        width: '31.5%',
        paddingTop: 150,
        paddingBottom: 15,
        paddingHorizontal: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor: '#292929',
    },
    genreText: {
        color: '#fff',
        textAlign: 'left',
        fontWeight: 'bold',
    },

    browseRowAll: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    browseButtonAll: {
        width: '48%',
        paddingTop: 15,
        paddingBottom: 60,
        paddingLeft: 12,
        borderRadius: 8,
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',     
        marginBottom: 12,
    },
    browseTextAll: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',  
        flexWrap: 'wrap',
    },
});

export default search_styles;