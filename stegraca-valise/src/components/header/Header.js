import React from 'react';
import NavBar from '../navbar/NavBar';
import './Header.css';

export default function Header({valisePage}) {
  return (
    <header>
      <span id="page-title">STEGRA.CA</span>
      <NavBar valisePage = {valisePage} />
    </header>
  )
}