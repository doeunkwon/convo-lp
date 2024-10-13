import React from 'react';
import '../styles/App.css';

function TextField({icon, placeholder, value, onChange }) {
  return (
    <div className="text-field">
      <span>{icon}</span>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;