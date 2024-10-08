import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SongBar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../Assets/Songs/JumpBackIn-A.jpg')}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.songTitle}>No Role Modelz</Text>
                <Text style={styles.artist}>J. Cole</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
                <MaterialCommunityIcons name="monitor-speaker" size={28} color="#b2b2b2" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
                <Octicons name="check-circle-fill" size={28} color="#28d35b" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, { marginRight: 14 }]}>
                <Icon name="play" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#15447e',
        height: 60,
        position: 'absolute',
        bottom: 60,
        borderRadius: 10,
        left: 4,
        right: 4,
        zIndex: 1,
    },
    infoContainer: {
        flexDirection: 'column',
        flex: 1,
    },
    songTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    artist: {
        color: '#d0d0d0',
        fontSize: 12,
    },
    iconButton: {
        paddingLeft: 16,
    },
    image: {
        marginLeft: 12,
        marginRight: 8,
        height: 40,
        width: 40,
        borderRadius: 2,
    },
});

export default SongBar;
