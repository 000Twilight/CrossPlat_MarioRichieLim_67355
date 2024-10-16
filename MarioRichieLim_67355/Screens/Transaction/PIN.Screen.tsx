import React, { useContext, useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionContext } from '../../Contexts/Transaction.Context';
import CategoryHeader from '../../Components/CategoryHeader';
import CustomText from '../../Components/CustomText';
import PIN_styles from '../../Styles/Transaction/PIN.style';

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

                    if (state.pinAttempts === 2) {
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

            <View style={PIN_styles.centeredContent}>
                <CustomText style={[PIN_styles.title, { lineHeight: 50 }]}>Masukkan PIN Anda</CustomText>
                {state.pinAttempts > 0 && state.pinAttempts < 3 && enteredPin !== state.pinNumber ? (
                    <CustomText style={[PIN_styles.subtitle, { color: 'red' }]}>PIN salah. Silahkan coba lagi.</CustomText>
                ) : (
                    <CustomText style={PIN_styles.subtitle}>Masukkan PIN Aplikasi Anda</CustomText>
                )}

                <TextInput
                    ref={inputRef}
                    keyboardType="number-pad"
                    secureTextEntry
                    value={enteredPin}
                    onChangeText={handlePinChange}
                    maxLength={6}
                    style={PIN_styles.hiddenInput}
                    autoFocus={true}
                />

                <TouchableOpacity onPress={keyboardPop}>
                    <View style={PIN_styles.pinContainer}>
                        {Array(6).fill('').map((_, index) => (
                            <View
                                key={index}
                                style={[
                                    PIN_styles.pinDot,
                                    enteredPin.length > index && PIN_styles.pinDotFilled,
                                ]}
                            />
                        ))}
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default PINScreen;
