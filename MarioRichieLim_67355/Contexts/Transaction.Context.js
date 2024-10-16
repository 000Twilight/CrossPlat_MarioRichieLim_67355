import React, { createContext, useReducer } from 'react';

const initialState = {
    phoneNumber: '',
    bpjsNumber: '',
    tokenId: '',

    saldo: 100000000,

    selectedPrice: 0,
    selectedPackage: '',

    isCustomerIdValid: false,
    isPhoneNumberValid: false,
    isBPJSNumberValid: false,

    pinNumber: '040504',
    pinAttempts: 0,

    transactionStatus: null,

    operator: '',

    transactionHistory: [
        {
            traceNo: '00111111',
            price: 50000,
            date: new Date().toLocaleString(),
            status: 'Berhasil',
            cardType: 'Debit',
            transactionType: 'Pulsa',
            phoneNumber: '081234567890',
        },
        {
            traceNo: '00222222', 
            price: 100000,
            date: new Date().toLocaleString(),
            status: 'Gagal',
            cardType: 'Credit',
            transactionType: 'Paket Data',
            phoneNumber: '089876543210',
        },
        {
            traceNo: '00333333', 
            price: 75000,
            date: new Date().toLocaleString(),
            status: 'Berhasil',
            cardType: 'Debit',
            transactionType: 'Listrik',
            phoneNumber: '081245678901',
        },
    ],
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
        case 'SET_TOKEN_ID':
            return {
                ...state,
                tokenId: action.payload,
                isTokenIdValid: /^[1-9]\d{19}$/.test(action.payload),  
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
        default:
            return state;
        case 'ADD_TRANSACTION':
            const newTransaction = {
                traceNo: generateTraceNo(),
                price: action.payload.price,
                date: new Date().toLocaleString(),
                status: action.payload.status,
                cardType: action.payload.cardType,
                transactionType: action.payload.transactionType,
                phoneNumber: action.payload.phoneNumber,
            };
            return {
                ...state,
                transactionHistory: [...state.transactionHistory, newTransaction],
            };

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

const generateTraceNo = () => {
    return Math.floor(Math.random() * 1000000000000).toString().padStart(8, '0');
};