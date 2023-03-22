import React from 'react';
import NavBar from './NavBar';
import './styles/Header.css';

export default function Header() {
  return (
    <header>
      <span id="page-title">STEGRA.CA</span>
      <NavBar />
    </header>
  )
}