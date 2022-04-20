/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import Info from "../components/Info";
import FilterTransaction from "../components/FilterTransaction";
import "../styles/table.css";

export default function OverviewPage() {

  const { transactions, getTransaction } = useContext(GlobalContext)
  useEffect(() => {
    getTransaction()
  
  }, [])

  return (
    <div className="container">
      <Info />
      <FilterTransaction />
      <table>
        <thead>
          <tr>
            <th>Transaction Id</th>
            <th>PIC</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((el, id) => {
            return (
              <tr key={id}>
                <td data-column="Id">{el.id}</td>
                <td data-column="PIC">{el.PIC}</td>
                {el.category === "income" ? (
                  <td data-column="Amount" className="income-data"> + {el.amount}</td>
                ) : (
                  <td data-column="Amount" className="expense-data"> - {el.amount}</td>
                )}
                <td data-column="Balance">{el.balance}</td>
                <td data-column="Created Date">{el.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
