import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import "../styles/filter.css";
import "../App.css";

export default function FilterTransaction() {
  const [id, setId] = useState("");
  const [pic, setPic] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { filterTransaction } = useContext(GlobalContext);

  const handleSubmitFilter = (e) => {
    e.preventDefault();

    const filter = {
      id: id,
      pic: pic,
      category: category,
      startDate: startDate,
      endDate: endDate,
    };
    console.log(filter, 'inifilter-')
    filterTransaction(filter);
  }

  return (
    <div style={{ marginBottom: "10px" }}>
      <form onSubmit={handleSubmitFilter} className="form-section">
        <div className="wrap-field">
          <label className="field">Transaction Id:</label>
          <input
            className=""
            type="text"
            name="id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="wrap-field">
          <label className="field">PIC:</label>
          <input
            type="text"
            name="PIC"
            onChange={(e) => setPic(e.target.value)}
          />
        </div>
        <div className="wrap-field">
          <label className="field">Category:</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="" name="category" defaultValue>
              all
            </option>
            <option value="income" name="income">
              income
            </option>
            <option value="expense" name="expense">
              expense
            </option>
          </select>
        </div>
        <div className="wrap-field">
          <label className="field">start date:</label>
          <input
            className=""
            type="date"
            name="start-date"
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="wrap-field">
          <label className="field">end date:</label>
          <input
            className=""
            type="date"
            name="end-date"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="button_search" type="submit" value="Submit">
          search
        </button>
      </form>
    </div>
  );
}
