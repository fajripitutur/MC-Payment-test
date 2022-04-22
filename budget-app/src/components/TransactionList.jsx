import React from "react";
import formatMoney from "../helpers/formatMoney";
import "../App.css";

export default function TransactionList({ transactionList }) {
  return transactionList.length > 0 ? (
    transactionList.map((el, id) => {
      return (
        <tr key={id}>
          <td data-column="Id">{el.id}</td>
          <td data-column="PIC">{el.pic}</td>
          {el.category === "income" ? (
            <td data-column="Amount" className=" plus">
              + {el.amount}
            </td>
          ) : (
            <td data-column="Amount" className=" minus">
              - {el.amount}
            </td>
          )}
          <td data-column="Balance">{formatMoney(el.balance)}</td>
          <td data-column="Created Date">{el.createdAt}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td colSpan="5" style={{ textAlign: "center", paddidng: "30px" }}>
        No result found
      </td>
    </tr>
  );
}
