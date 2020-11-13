import React from 'react';

import './styles.css';

function OptionItem({ name, isSelected, onClick }) {
  return (
    <li 
      className={isSelected ? 'selected-options-item' : 'options-item'} 
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default OptionItem;