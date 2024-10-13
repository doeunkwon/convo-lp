import React from 'react';
import '../styles/App.css';

function TextField({icon, placeholder }) {
  return (
    <div className="text-field">
      <span>{icon}</span>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default TextField;