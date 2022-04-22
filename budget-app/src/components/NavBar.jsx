import React, { useState } from "react";
import "../styles/navbar.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setIsExpanded(false);
    setModalOpen(true);
  };

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Budget App
      </a>
      <button className="hamburger" onClick={() => setIsExpanded(!isExpanded)}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={isExpanded ? "navigation-menu expanded" : "navigation-menu"}
      >
        <ul>
          <li className="list-nav">
            <Link to="/" onClick={() => setIsExpanded(!isExpanded)}>
              Overview
            </Link>
          </li>
          <li className="list-nav">
            <Link
              to="/"
              onClick={() => {
                handleModal();
              }}
            >
              Add Transaction
            </Link>
          </li>
        </ul>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </nav>
  );
}
