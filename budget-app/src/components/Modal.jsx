import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import "../styles/modal.css";

export default function Modal({ setOpenModal }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [category, setCategory] = useState("income");

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      PIC: text,
      category,
      amount: parseInt(amount),
      balance,
      createdAt: new Date().toLocaleDateString("en-US"),
    };
    addTransaction(newTransaction);
    setOpenModal(false);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>Add transaction </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset className="" style={{ padding: "10px" }}>
            <label>
              <p>PIC</p>
              <input name="name" onChange={(e) => setText(e.target.value)} />
            </label>
            <label>
              <p>amount</p>
              <input
                type="number"
                name="amount"
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
