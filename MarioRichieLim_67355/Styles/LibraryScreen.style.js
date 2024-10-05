import { StyleSheet } from 'react-native';

const library_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },

    section: {
        padding: 15,
    },


    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',  // Pushes items to the ends of the row
    },


    menuButton: {
        marginTop: -18,
        marginRight: 7,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#292929',
    },
    menuText: {
        color: 'white',
        fontSize: 12,
    },


    recentsTitle: {
        color: 'white',
        fontSize: 12,
        fontWeight: '900',
    },


    playlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 16,
    },
    playlistText: {
        flex: 1,
        marginLeft: 12,
    },
    playlistTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    playlistSubtitle: {
        color: '#a3a3a3',
        fontSize: 12,
    },
    downloadIcon: {
        paddingVertical: 2,
        paddingHorizontal: 3.5,
        borderRadius: 20,
        marginRight: 5,
        backgroundColor: '#28d35b',
    },
    circleAdd: {
        paddingVertical: 40,
        paddingHorizontal: 40,
        borderRadius: 20,
        backgroundColor: '#292929',
    }
});

export default library_styles;
