import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import data from '../data/dummy-data'

// Initial state
const initialState = {
  transactions: data,
  balance: 0,
  expense: 0,
  income: 0
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }
  
  function getTransaction() {
    console.log('weeweewew');
    dispatch({
      type: 'GET_TRANSACTION',
    })
  }

  function getBalance() {
    console.log('masuk balance')
    dispatch({
      type: 'GET_BALANCE',
    })
  }
  function getIncome() {
    console.log('masuk income')
    dispatch({
      type: 'GET_INCOME',
    })
  }
  function getExpense() {
    console.log('masuk expense')
    dispatch({
      type: 'GET_EXPENSE',
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    addTransaction,
    getTransaction,
    getBalance,
    getIncome,
    getExpense
  }}>
    {children}
  </GlobalContext.Provider>);
}