import React from 'react';
import NavBar from '../navbar/NavBar';
import './Header.css';

export default function Header({valisePage}) {
  return (
    <header>
    <div className="page-title">
      <span className="page-title-1">&#123;STE</span><span className="page-title-2">GRA</span><span className="page-title-1">.CA&#125;</span>
      </div>
      <NavBar valisePage = {valisePage} />
    </header>
  )
}