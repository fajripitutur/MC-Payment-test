/* eslint-disable no-const-assign */
import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import "../styles/modal.css";
import "../App.css"

export default function Modal({ setOpenModal }) {
  const [pic, setPic] = useState("");
  const [amount, setAmount] = useState(0);
  const [newBalance, setNewBalance] = useState(0);
  const [category, setCategory] = useState("income");

  const { addTransaction, getBalance, balance } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    getBalance()

    let tempBalance = 0
    if (category === 'income') {
      tempBalance = balance + parseInt(amount)
    }else {
      tempBalance = balance - parseInt(amount)
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      pic: pic,
      category,
      amount: parseInt(amount),
      balance: tempBalance,
      createdAt: new Date().toLocaleDateString("en-US"),
    };

    addTransaction(newTransaction);
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modal-container">
        <div className="title">
          <h1>Add transaction </h1>
        </div>
        <form onSubmit={handleSubmit} style={{ borderRadius: "10px" }}> 
          <fieldset style={{ padding: "10px", borderRadius: '0px 0px 10px 10px' }}>
            <label>
              <p>PIC</p>
              <input type="text" name="name" onChange={(e) => setPic(e.target.value)} />
            </label>
            <label>
              <p>amount</p>
              <input
                type="number"
                name="amount"
                min={0}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <label>
              <p>category</p>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="income" name="income">
                  income
                </option>
                <option value="expense" name="expense">
                  expense
                </option>
              </select>
            </label>
          </fieldset>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button onClick={handleSubmit}>Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
}
