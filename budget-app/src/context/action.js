import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import data from "../data/dummy-data";

// Initial state
const initialState = {
  transactions: data,
  balance: 0,
  expense: 0,
  income: 0,
  arr: [],
  isFilter: false
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
    dispatch({
      type: "GET_TRANSACTION",
    });
  }

  function addFilter(filterdata) {

    let transactions = state.transactions;

    let { id, category } = filterdata;
    if (filterdata) state.isFilter = true

    let hasil_akhir;
    if(filterdata.id){

      hasil_akhir = transactions.filter((el) => {
        return el.id == id;
      });
    }

    if(filterdata.category){
      hasil_akhir = !hasil_akhir ? transactions.filter((el) => {
        return el.category == category ;

      }): hasil_akhir.filter((el) => {
        return el.category == category 
      })
    }
    // let result = transactions.filter((el) => {
    //   return el.id == id;
    // });


    // let result2 = transactions.filter((el) => {
    //   return el.id == id;
    // });

    //gabing resukt 1 sama 2


    dispatch({
      type: "FILTER_TRANSACTION",
      payload: hasil_akhir
    });
    console.log(hasil_akhir, 'hasil akhir');
  }

  function getIncome() {
    dispatch({
      type: "GET_INCOME",
    });
  }

  function getExpense() {
    dispatch({
      type: "GET_EXPENSE",
    });
  }

  function getBalance() {
    dispatch({
      type: "GET_BALANCE",
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        income: state.income,
        expense: state.expense,
        balance: state.balance,
        addTransaction,
        addFilter,
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
