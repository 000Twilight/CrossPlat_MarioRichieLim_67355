import { StyleSheet } from 'react-native';

const profile_styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0',
        
    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
    },
    profileImage: {
        width: 240, 
        height: 240, 
        borderRadius: 120, 
        marginBottom: 30, 
    },
    profileText: {
        fontSize: 24,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        marginBottom: 15, 
    },
    versionText: {
        fontSize: 16,
        color: '#8AB8E5',
        fontFamily: 'Lato-Bold',
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
});

export default profile_styles;
