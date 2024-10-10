import React, { createContext, useReducer } from 'react';

const initialState = {
    phoneNumber: '',
    bpjsNumber: '',
    customerId: '',

    saldo: 1000000,

    transactionHistory: [],

    selectedPrice: 0,
    selectedPackage: '',

    isCustomerIdValid: false,
    isPhoneNumberValid: false,
    isBPJSNumberValid: false,
    
    pinNumber: '040504',
    pinAttempts: 0,

    transactionStatus: null,

    operator: '',
};

const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PHONE_NUMBER':
            const isPhoneValid = /^08\d{8,12}$/.test(action.payload);
            const operator = getOperator(action.payload);
            return {
                ...state,
                phoneNumber: action.payload,
                isPhoneNumberValid: isPhoneValid,
                operator: isPhoneValid ? operator : 'Unknown Operator',
            };
        case 'SET_CUSTOMER_ID':
            return {
                ...state,
                customerId: action.payload,
                isCustomerIdValid: /^[1-9]\d{11}$/.test(action.payload),
            };
        case 'SET_BPJS_NUMBER':
            return {
                ...state,
                bpjsNumber: action.payload,
                isBPJSNumberValid: /^0\d{12}$/.test(action.payload),
            };
        case 'SET_SELECTED_PRICE':
            return { ...state, selectedPrice: action.payload };
        case 'SET_SELECTED_PACKAGE':
            return { ...state, selectedPackage: action.payload };
        case 'DEDUCT_SALDO':
            return { ...state, saldo: state.saldo - action.payload };
        case 'INCREMENT_PIN_ATTEMPTS':
            return { ...state, pinAttempts: state.pinAttempts + 1 };
        case 'RESET_PIN_ATTEMPTS':
            return { ...state, pinAttempts: 0 };
        case 'SET_TRANSACTION_STATUS':
            return { ...state, transactionStatus: action.payload };
        case 'ADD_TRANSACTION':
            const newTransaction = {
                price: action.payload.price,
                date: new Date().toLocaleString(),
                remainingSaldo: state.saldo
            };
            return {
                ...state,
                transactionHistory: [...state.transactionHistory, newTransaction],
            };
        default:
            return state;
    }
};

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState);

    return (
        <TransactionContext.Provider value={{ state, dispatch }}>
            {children}
        </TransactionContext.Provider>
    );
};

const getOperator = (phoneNumber) => {
    const prefix = phoneNumber.substring(0, 4);
    if (['0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851'].includes(prefix)) return 'Telkomsel';
    if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].includes(prefix)) return 'Indosat Ooredoo';
    if (['0817', '0818', '0819', '0859', '0877', '0878'].includes(prefix)) return 'XL Axiata';
    if (['0895', '0896', '0897', '0898', '0899'].includes(prefix)) return 'Three';
    if (['0838', '0831', '0832', '0833'].includes(prefix)) return 'Axis';
    return 'Unknown Operator';
};
