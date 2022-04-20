import React, { useState, useContext, useEffect } from "react";
import "../styles/info.css";
import Modal from "./Modal";
import { GlobalContext } from "../context/action";

export default function Info() {
  const [modalOpen, setModalOpen] = useState(false);
  const { transactions, balance, expense, income } = useContext(GlobalContext);

  useEffect(() => {

  })
  
  return (
    <div className="info-section">
      <div className="card">
        <div className="card-content">
          <div className="card-title">Balance</div>
          <div className="card-subtitle">{balance}</div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="card-title">Expense</div>
          <div className="card-subtitle">1000 dummy</div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="card-title">Income</div>
          <div className="card-subtitle">1000 dummy</div>
        </div>
      </div>
      <button
        className="button_add_transaction"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        add transaction
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}


// {
//   id: sdf
//   piC: sdf
//   category: sdf
//   start date : sdf
//   end date: sdf
// }
