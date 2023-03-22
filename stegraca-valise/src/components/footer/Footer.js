import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
        <ul id="footer-nav">
        <li id="footer-link"><a
        href="https://www.github.com/omgthegreenranger">GitHub
      </a></li>
      <li id="footer-link"><a href="https://www.linkedin.com/stephen.cardie">LinkedIN</a></li>
        </ul>
        <p>Site copyright viciously enforced by Stephen Cardie</p>
    </footer>
  )
}