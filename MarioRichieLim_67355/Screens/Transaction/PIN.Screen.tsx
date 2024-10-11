import React, { useContext, useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import CategoryHeader from '../../Components/CategoryHeader';
import CustomText from '../../Components/CustomText';

const PINScreen = ({ navigation }) => {
    const { state, dispatch } = useContext(TransactionContext);
    const [enteredPin, setEnteredPin] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        dispatch({ type: 'RESET_PIN_ATTEMPTS' });
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

    const keyboardPop = () => {
        inputRef.current?.blur();
        setTimeout(() => {
            inputRef.current?.focus();
        }, 100);
    };

    return (
        <View style={{ flex: 1 }}>
            <CategoryHeader title='' />

            <View style={styles.centeredContent}>
                <CustomText style={[styles.title, { lineHeight: 50 }]}>Masukkan PIN Anda</CustomText>
                {state.pinAttempts > 0 && state.pinAttempts < 3 && enteredPin !== state.pinNumber ? (
                    <CustomText style={[styles.subtitle, { color: 'red' }]}>PIN salah. Silahkan coba lagi.</CustomText>
                ) : (
                    <CustomText style={styles.subtitle}>Masukkan PIN Aplikasi Anda</CustomText>
                )}

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

                <TouchableOpacity onPress={keyboardPop}>
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

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontFamily: 'Lato-Black',
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        marginBottom: 25,
    },
    pinContainer: {
        flexDirection: 'row',
    },
    pinDot: {
        width: 30,
        height: 30,
        borderRadius: 15,
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
