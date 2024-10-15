import React from 'react';
import '../styles/Navbar.css';
import convo from '../assets/convo.png'

function Navbar({ scrollToWaitlist }) {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={convo} alt="Convo Logo" />
      <button onClick={scrollToWaitlist}>Get started</button>
    </nav>
  );
}

export default Navbar;