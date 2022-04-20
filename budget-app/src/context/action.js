import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "../data/dummy-data";

// Initial state
const initialState = {
  transactions: data,
  balance: 0,
  expense: 0,
  income: 0,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function getTransaction() {
    // console.log('weeweewew');
    dispatch({
      type: "GET_TRANSACTION",
    });
  }

  function getIncome() {
    // dispatch({
    //   type: 'GET_INCOME',
    // })
    let totalIncome = 0;
    for (let i = 0; i < state.transactions.length; i++) {
      if (state.transactions[i].category === "income") {
        totalIncome = totalIncome += state.transactions[i].amount;
      }
    }
    state.income = totalIncome;
  }

  function getExpense() {
    // dispatch({
    //   type: "GET_EXPENSE",
    // });
    let totalExpense = 0;
    for (let i = 0; i < state.transactions.length; i++) {
      if (state.transactions[i].category === "expense") {
        totalExpense = totalExpense += state.transactions[i].amount;
      }
    }
    state.expense = totalExpense;
  }

  function getBalance() {
    // dispatch({
    //   type: "GET_BALANCE",
    // });
    state.balance = state.income - state.expense
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        income: state.income,
        expense: state.expense,
        balance: state.balance,
        addTransaction,
        getTransaction,
        getBalance,
        getIncome,
        getExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
