import React, { createContext, useReducer } from 'react';
import MenuData from '../Data/MenuData'; // Your menu data file

// Initial State
const initialState = {
  menu: MenuData, // Import the menu items
  order: [], // Tracks the user's order
  totalPrice: 0, // Total price of the order
  selectedTable: null, // Identifies the table based on QR code
};

// Reducer Function
const restaurantReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER': {
      const existingItem = state.order.find(item => item.id === action.payload.id);
      const quantity = Number(action.payload.quantity) || 1;  // Ensure quantity is a number
      const price = Number(action.payload.price) || 0;        // Ensure price is a number

      if (existingItem) {
        return {
          ...state,
          order: state.order.map(item =>
            item.id === action.payload.id
              ? {
                ...item,
                quantity: item.quantity + quantity,
                price: price,
              }
              : item
          ),
          totalPrice: state.totalPrice + price * quantity,
        };
      }
      return {
        ...state,
        order: [...state.order, { ...action.payload, quantity }],
        totalPrice: state.totalPrice + price * quantity,
      };
    }

    case 'REMOVE_FROM_ORDER': {
      const itemToRemove = state.order.find(item => item.id === action.payload.id);
      if (!itemToRemove) return state;

      return {
        ...state,
        order: state.order.filter(item => item.id !== action.payload.id),
        totalPrice: state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.order.find(item => item.id === id);
      if (!itemToUpdate) return state;

      const priceDifference =
        (quantity - itemToUpdate.quantity) * itemToUpdate.price;

      return {
        ...state,
        order: state.order.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
        totalPrice: state.totalPrice + priceDifference,
      };
    }
    case 'CLEAR_ORDER': {
      return {
        ...state,
        order: [],
        totalPrice: 0,
      };
    }
    case 'SET_TABLE': {
      return { ...state, selectedTable: action.payload };
    }
    default:
      return state;
  }
};

// Create Context
export const RestaurantContext = createContext();

// Provider Component
export const RestaurantProvider = ({ children }) => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  return (
    <RestaurantContext.Provider value={{ state, dispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};