import React, { useContext, useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../../Contexts/Transaction.Context';

const PINScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(TransactionContext);
    const [enteredPin, setEnteredPin] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handlePinChange = (pinNumber) => {
        if (pinNumber.length <= 6) {
            setEnteredPin(pinNumber);

            if (pinNumber.length === 6) {
                dispatch({ type: 'INCREMENT_PIN_ATTEMPTS' });

                if (pinNumber === state.pinNumber) {
                    navigation.navigate('Success', {
                        isSuccess: true,
                    });
                } else {
                    setEnteredPin('');

                    if (state.pinAttempts === 3) {
                        navigation.navigate('Success', {
                            isSuccess: false,
                        });
                    }
                }
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Masukkan PIN Anda</Text>

            <TextInput
                ref={inputRef}
                keyboardType="number-pad"
                secureTextEntry
                value={enteredPin}
                onChangeText={handlePinChange}
                maxLength={6}
                style={styles.hiddenInput}
                autoFocus={true}
            />

            <TouchableOpacity onPress={() => inputRef.current?.focus()}>
                <View style={styles.pinContainer}>
                    {Array(6).fill('').map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.pinDot,
                                enteredPin.length > index && styles.pinDotFilled,
                            ]}
                        />
                    ))}
                </View>
            </TouchableOpacity>

            {state.pinAttempts > 0 && state.pinAttempts < 3 && enteredPin !== state.pinNumber && (
                <Text style={styles.subtitle}>PIN salah. Silahkan coba lagi.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginTop: 20,
        color: 'red',
    },
    pinContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    pinDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        margin: 5,
        backgroundColor: '#E0E0E0',
    },
    pinDotFilled: {
        backgroundColor: 'blue',
    },
    hiddenInput: {
        height: 0,
        width: 0,
        opacity: 0,
        position: 'absolute',
    },
});

export default PINScreen;
