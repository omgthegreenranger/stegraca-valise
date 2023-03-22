import React from 'react';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about">
          About
        </a>
      </li>
      <li className="nav-item">
      <a href="#projects">
        Projects
      </a>
    </li>
      <li className="nav-item">
        <span>
          Contact
        </span>
      </li>
    </ul>
  );
}

export default NavBar;
