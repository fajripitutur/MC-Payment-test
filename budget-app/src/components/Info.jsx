import React, { useState, useContext, useEffect } from "react";
import "../styles/info.css";
import "../App.css";
import Modal from "./Modal";
import { GlobalContext } from "../context/action";
import formatMoney from "../helpers/formatMoney";

export default function Info(props) {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="info-section">
      <div className="bal-container card">
        <div className="card-content">
          <div className="card-title">Balance</div>
          <div className="card-subtitle ">{formatMoney(props.infoBalance)}</div>
        </div>
      </div>
      <div className="inc-exp-container card" style={{ display: "flex" }}>
        <div className="card-content">
          <div className="card-title">Expense</div>
          <div className="card-subtitle minus">
            {formatMoney(props.infoExpense)}
          </div>
        </div>
        <div className="card-content">
          <div className="card-title">Income</div>
          <div className="card-subtitle plus">
            {formatMoney(props.infoIncome)}
          </div>
        </div>
      </div>
    </div>
  );
}
