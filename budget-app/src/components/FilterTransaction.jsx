import React from "react";

export default function FilterTransaction() {
  return (
    <div className="" style={{ marginBottom: "10px" }}>
      <div className="">
        <form className="" style={{ display: "flex" }}>
          <div>
            <label style={{ display: "block" }}>Transaction Id:</label>
            <input type="text" name="id" />
          </div>
          <div>
            <label style={{ display: "block" }}>PIC:</label>
            <input type="text" name="PIC" />
          </div>
          <div className="">
            <label style={{ display: "block" }}>Category:</label>
            <select>
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
          <button style={{ width: "300px" }} type="submit" value="Submit">
            search
          </button>
        </form>
      </div>
    </div>
  );
}
