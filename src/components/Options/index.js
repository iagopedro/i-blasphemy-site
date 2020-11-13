import React, { useState } from 'react';
import OptionItem from './components/OptionItem';

import './styles.css';

function Options({ options }) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <h1>I, BLASPHEMY</h1>
      <p>Site interno para download de arquivos</p>
      <ul className='options-list'>
        {options.map(option => (
          <OptionItem 
            key={option}
            name={option}
            isSelected={option === isSelected}
            onClick={() => setIsSelected(option)}
          />
        ))}
      </ul>
    </>
  );
}

export default Options;