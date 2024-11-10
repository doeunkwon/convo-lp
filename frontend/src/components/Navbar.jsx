import React from 'react';
import '../styles/Navbar.css';
import convo from '../assets/convo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={convo} alt="Convo Logo" />
      <button onClick={() => window.open('https://tryconvo.today', '_blank')}>Try Convo</button>
    </nav>
  );
}

export default Navbar;