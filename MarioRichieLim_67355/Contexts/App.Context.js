import React, { createContext, useState, useEffect } from 'react';
import * as Font from 'expo-font';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [someValue, setSomeValue] = useState('');
    const [anotherValue, setAnotherValue] = useState(0);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Lato-Regular': require('../Assets/Lato/Lato-Regular.ttf'),
                'Lato-Italic': require('../Assets/Lato/Lato-Italic.ttf'),
                'Lato-Bold': require('../Assets/Lato/Lato-Bold.ttf'),
                'Lato-BoldItalic': require('../Assets/Lato/Lato-BoldItalic.ttf'),
                'Lato-Black': require('../Assets/Lato/Lato-Black.ttf'),
                'Lato-BlackItalic': require('../Assets/Lato/Lato-BlackItalic.ttf'),
                'Lato-Light': require('../Assets/Lato/Lato-Light.ttf'),
                'Lato-LightItalic': require('../Assets/Lato/Lato-LightItalic.ttf'),
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    const updateSomeValue = (newValue) => {
        setSomeValue(newValue);
    };

    return (
        <AppContext.Provider value={{ fontsLoaded, someValue, anotherValue, updateSomeValue }}>
            {children}
        </AppContext.Provider>
    );
};
