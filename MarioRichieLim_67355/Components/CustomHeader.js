import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomHeader({ title, middleButtons, activeButton, rightIcons, navigation }) {
    return (
        <View style={styles.headerContainer}>
            {/* Left Side: Profile Circle Button */}
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <View style={styles.circle}>
                    <Text style={styles.circleText}>M</Text>
                </View>
            </TouchableOpacity>

            {/* Middle: Either a title or multiple buttons */}
            <View style={styles.middleContainer}>
                {middleButtons ? (
                    <View style={styles.middleButtonsContainer}>
                        {middleButtons.map((button, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={button.onPress}
                                style={[
                                    styles.ovalButton,
                                    activeButton === button.name
                                        ? styles.activeButton
                                        : styles.inactiveButton,
                                ]}
                            >
                                <Text
                                    style={
                                        activeButton === button.name
                                            ? styles.activeButtonText
                                            : styles.inactiveButtonText
                                    }
                                >
                                    {button.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.headerTitle}>{title}</Text>
                )}
            </View>

            {/* Right Side: 0, 1, or 2 icons */}
            <View style={styles.rightButtonsContainer}>
                {rightIcons &&
                    rightIcons.map((icon, index) => (
                        <TouchableOpacity key={index} onPress={icon.onPress}>
                            {icon.icon}
                        </TouchableOpacity>
                    ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 40,
        paddingBottom: 22,
        backgroundColor: '#0d0d0d',
        height: 95,
    },
    circle: {
        width: 32,
        height: 32,
        backgroundColor: 'pink',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },

    middleContainer: {
        flex: 1,
    },
    middleButtonsContainer: {
        flexDirection: 'row',
    },

    ovalButton: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginLeft: 8,
    },

    activeButton: {
        backgroundColor: '#28d35b', 
    },
    inactiveButton: {
        backgroundColor: '#292929', 
    },

    activeButtonText: {
        color: 'black', 
        fontSize: 12,
    },
    inactiveButtonText: {
        color: 'white', 
        fontSize: 12,
    },
    headerTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    rightButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomHeader;
