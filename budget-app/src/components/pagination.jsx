import React from "react";
import "../styles/pagination.css";

export default function pagination({
  postsPerPage,
  totalPosts,
  currPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container-pagination">
      <div className="pagination">
        {pageNumbers.map((number) => (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            key={number}
            onClick={() => paginate(number)}
            className={currPage == number ? "active-pagination" : ""}
          >
            {number}
          </a>
        ))}
      </div>
    </div>
  );
}
