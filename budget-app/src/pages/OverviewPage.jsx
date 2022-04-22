/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/action";
import Info from "../components/Info";
import FilterTransaction from "../components/FilterTransaction";
import Pagination from "../components/pagination";
import TransactionList from "../components/TransactionList";
import "../styles/table.css";

export default function OverviewPage() {
  // const [totalIncome, setTotalIncome] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [isFilter, setIsFilter] = useState(false);

  const {
    getTransaction,
    getExpense,
    getBalance,
    getIncome,
    transactions,
    income,
    balance,
    expense,
  } = useContext(GlobalContext);

  useEffect(() => {
    getTransaction();
    getIncome();
    getExpense();
    getBalance();
  }, [transactions, currentPage]);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;

  if (isFilter) {
    indexOfFirstPost = 0;
    indexOfLastPost = 5;
  }

  let currentTransaction = transactions.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setIsFilter(false);
  };

  return (
    <div className="container">
      <FilterTransaction isFilter={isFilter} setIsFilter={setIsFilter} />
      <Info infoIncome={income} infoExpense={expense} infoBalance={balance} />
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
          <TransactionList transactionList={currentTransaction} />
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={transactions.length}
        currPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}
