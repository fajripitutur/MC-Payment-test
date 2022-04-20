/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import Info from "../components/Info";
import FilterTransaction from "../components/FilterTransaction";
import "../styles/table.css";

export default function OverviewPage() {
  // const [totalIncome, setTotalIncome] = useState(0);

  const {
    transactions,
    getTransaction,
    getExpense,
    getBalance,
    getIncome,
    income,
    balance,
    expense,
  } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();
    getIncome();
    getExpense();
    getBalance();
  }, []);
  // console.log(income, 'di component')

  // function totalIncome() {
  //   let resIncome = 0;
  //   for (let i = 0; i < transactions.length; i++) {
  //     if (transactions[i].category === "income") {
  //       resIncome = resIncome += transactions[i].amount;
  //     }
  //   }
  //   return resIncome;
  // }

  // function totalExpense() {
  //   let resExpense = 0;
  //   for (let i = 0; i < transactions.length; i++) {
  //     if (transactions[i].category === "expense") {
  //       resExpense = resExpense += transactions[i].amount;
  //     }
  //   }
  //   return resExpense;
  // }

  // function totalBalance() {
  //   let resBalance = totalIncome() - totalExpense();
  //   return resBalance;
  // }

  return (
    <div className="container">
      <Info
        infoIncome={income}
        infoExpense={expense}
        infoBalance={balance}
      />
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
                  <td data-column="Amount" className="income-data">
                    + {el.amount}
                  </td>
                ) : (
                  <td data-column="Amount" className="expense-data">
                    - {el.amount}
                  </td>
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
