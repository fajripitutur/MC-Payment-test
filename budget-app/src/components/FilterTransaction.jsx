import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import "../styles/filter.css";
import "../App.css";

export default function FilterTransaction({ isFilter, setIsFilter }) {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  const { addFilter } = useContext(GlobalContext);

  const handleSubmitFilter = (e) => {
    e.preventDefault();

    const filters = {
      id: id,
      category: category,
    };

    setIsFilter(true);
    addFilter(filters);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <form onSubmit={handleSubmitFilter} className="form-section">
        <div className="wrap-field">
          <label className="field">Transaction Id:</label>
          <input
            className="filter-input"
            type="text"
            name="id"
            onChange={(e) => setId(e.target.value)}
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
        <button className="button_search" type="submit" value="Submit">
          search
        </button>
      </form>
    </div>
  );
}
