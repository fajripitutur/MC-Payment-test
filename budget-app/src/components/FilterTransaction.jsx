import React from "react";
import '../styles/filter.css'

export default function FilterTransaction() {

  function handleSubmitFilter() {

  }
  

  return (
    <div  style={{ marginBottom: "10px" }}>
      <form onSubmit={handleSubmitFilter()} className="form-section">
        <div className="wrap-field">
          <label className="field" >Transaction Id:</label>
          <input className="" type="text" name="id" />
        </div>
        <div className="wrap-field">
          <label className="field" >PIC:</label>
          <input type="text" name="PIC" />
        </div>
        <div className="wrap-field">
          <label className="field" >Category:</label>
          <select >
            <option value="" name="income" defaultValue>
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
          <label className="field" >start date:</label>
          <input className="" type="text" name="PIC" />
        </div>
        <div className="wrap-field">
          <label className="field" >end date:</label>
          <input className="" type="text" name="PIC" />
        </div>
        <button  className="button_search" type="submit" value="Submit">
          search
        </button>
      </form>
    </div>
  );
}
