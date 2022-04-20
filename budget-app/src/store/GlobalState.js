import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import dataTransactions from "../data/dummy-data";

// Initial state
const initialState = {
  transactions: dataTransactions,
  balance: 0,
  expense: 0,
  income: 0,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function filterTransaction(filterdata) {
    dispatch({
      type: "FILTER_TRANSACTION",
      payload: filterdata,
    });
  }

  function getTransaction() {
    dispatch({
      type: "GET_TRANSACTION",
    });
  }

  
  function getIncome() {
    // dispatch({
    //   type: 'GET_INCOME',
    // });
    let totalIncome = 0
    for (let i = 0; i < state.transactions.length; i++) {
      if (state.transactions[i].category === "income") {
        totalIncome = totalIncome += state.transactions[i].amount;
      }
    }
    state.income = totalIncome
  }
  function getExpense() {
    // dispatch({
    //   type: 'GET_EXPENSE',
    // });
    let totalExpense = 0
    for (let i = 0; i < state.transactions.length; i++) {
      if (state.transactions[i].category === "expense") {
        totalExpense = totalExpense += state.transactions[i].amount;
      }
    }
    state.income = totalExpense
  }
  function getBalance() {
    // dispatch({
    //   type: 'GET_BALANCE',
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
        deleteTransaction,
        addTransaction,
        filterTransaction,
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
