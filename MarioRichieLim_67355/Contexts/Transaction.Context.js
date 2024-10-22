import React, { createContext, useReducer } from 'react';

const initialState = {
    // phoneNumber: '',
    // bpjsNumber: '',
    // tokenId: '',
    customerId: '',

    saldo: 100000000,

    selectedPrice: 0,
    selectedPackage: '',

    pinNumber: '040504',
    pinAttempts: 0,

    transactionStatus: null,

    operator: '',

    transactionType: '',
    transactionHistory: [
        {
            traceNo: '00111111',
            price: 50000,
            date: new Date().toISOString(),
            status: 'Berhasil',
            cardType: 'Debit',
            transactionType: 'Pulsa',
            customerId: '081234567890',
        },
        {
            traceNo: '00222222',
            price: 100000,
            date: new Date().toISOString(),
            status: 'Gagal',
            cardType: 'Credit',
            transactionType: 'Paket Data',
            customerId: '089876543210',
        },
        {
            traceNo: '00333333',
            price: 75000,
            date: new Date().toISOString(),
            status: 'Berhasil',
            cardType: 'Debit',
            transactionType: 'Listrik',
            customerId: '081245678901',
        },
    ],
};

const transactionReducer = (state, action) => {
    switch (action.type) {
        // case 'SET_PHONE_NUMBER':
        //     const isPhoneValid = /^08\d{8,12}$/.test(action.payload);
        //     const operator = getOperator(action.payload);
        //     return {
        //         ...state,
        //         phoneNumber: action.payload,
        //         isPhoneNumberValid: isPhoneValid,
        //         operator: isPhoneValid ? operator : 'Unknown Operator',
        //     };
        // case 'SET_TOKEN_ID':
        //     return {
        //         ...state,
        //         tokenId: action.payload,
        //         isTokenIdValid: /^[1-9]\d{19}$/.test(action.payload),
        //     };
        // case 'SET_BPJS_NUMBER':
        //     return {
        //         ...state,
        //         bpjsNumber: action.payload,
        //         isBPJSNumberValid: /^0\d{12}$/.test(action.payload),
        //     };
        case 'SET_CUSTOMER_ID':
            let isValid = false;

            if (state.transactionType === 'Pulsa' || state.transactionType === 'Paket Data') {
                isValid = /^08\d{8,12}$/.test(action.payload);
            } else if (state.transactionType === 'Listrik') {
                isValid = /^[1-9]\d{19}$/.test(action.payload);
            } else if (state.transactionType === 'BPJS') {
                isValid = /^0\d{12}$/.test(action.payload);
            }

            return {
                ...state,
                customerId: action.payload,
                isCustomerIdValid: isValid,
                operator: (state.transactionType === 'Pulsa' || state.transactionType === 'Paket Data') && isValid ? getOperator(action.payload) : 'Unknown Operator',
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
        case 'SET_SELECTED_TRACE_NO':
            return { ...state, selectedTraceNo: action.payload };
        case 'SET_TRANSACTION_TYPE':
            return { ...state, transactionType: action.payload };
        case 'ADD_TRANSACTION':
            const newTransaction = {
                traceNo: generateUniqueTraceNo(state.transactionHistory),
                price: action.payload.price,
                date: new Date().toISOString(),
                status: action.payload.status,
                cardType: action.payload.cardType,
                transactionType: state.transactionType,
                // customerId: state.phoneNumber || state.bpjsNumber || state.tokenId || 'Unknown Customer',
                customerId: state.customerId,
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

// export const getOperator = (phoneNumber) => {
//     const prefix = phoneNumber.substring(0, 4);
//     if (['0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851'].includes(prefix)) return 'Telkomsel';
//     if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].includes(prefix)) return 'Indosat Ooredoo';
//     if (['0817', '0818', '0819', '0859', '0877', '0878'].includes(prefix)) return 'XL Axiata';
//     if (['0895', '0896', '0897', '0898', '0899'].includes(prefix)) return 'Three';
//     if (['0838', '0831', '0832', '0833'].includes(prefix)) return 'Axis';
//     return 'Unknown Operator';
// };

export const getOperator = (customerId) => {
    const prefix = customerId.substring(0, 4);
    if (['0811', '0812', '0813', '0821', '0822', '0823', '0852', '0853', '0851'].includes(prefix)) return 'Telkomsel';
    if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].includes(prefix)) return 'Indosat Ooredoo';
    if (['0817', '0818', '0819', '0859', '0877', '0878'].includes(prefix)) return 'XL Axiata';
    if (['0895', '0896', '0897', '0898', '0899'].includes(prefix)) return 'Three';
    if (['0838', '0831', '0832', '0833'].includes(prefix)) return 'Axis';
    return 'Unknown Operator';
};

const generateUniqueTraceNo = (history) => {
    let newTraceNo;
    do {
        newTraceNo = Math.floor(Math.random() * 1000000000000).toString().padStart(8, '0');
    } while (history.some(transaction => transaction.traceNo === newTraceNo));
    return newTraceNo;
};