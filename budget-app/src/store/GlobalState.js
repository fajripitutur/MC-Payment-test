import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import dataTransactions from '../data/dummy-data'

// Initial state
const initialState = {
  transactions: dataTransactions,
  balance: 0,
  expense: 0,
  income: 0
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    console.log('add transaction')
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function getTransaction() {
    dispatch({
      type: 'GET_TRANSACTION',
    });
  }
  
  function getBalance(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
    getTransaction,
    getBalance,
  }}>
    {children}
  </GlobalContext.Provider>);
}