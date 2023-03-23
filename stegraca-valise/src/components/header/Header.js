import React from 'react';
import NavBar from '../navbar/NavBar';
import './Header.css';

export default function Header({setPage}) {
  return (
    <header>
      <span id="page-title">STEGRA.CA</span>
      <NavBar handlePageChange = {setPage}/>
    </header>
  )
}