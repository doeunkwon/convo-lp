import React from 'react';
import '../styles/TextField.css';

function TextField({icon, placeholder, value, onChange }) {
  return (
    <div className="text-field">
      <span>{icon}</span>
      <input 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        aria-label={placeholder}
      />
    </div>
  );
}

export default TextField;