import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NumberScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('FrontEnd')}
            />
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('BackEnd')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NumberScreen;