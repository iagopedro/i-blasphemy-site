import React from 'react';

import './styles.css';

function Header() {
  // const [isSelected, setIsSelected] = useState(false)

  return (
    <>
      <h1>I, BLASPHEMY</h1>
      <p>Site interno para download de arquivos</p>
      {/* <ul className='options-list'>
        {options.map(option => (
          <OptionItem 
            key={option}
            name={option}
            isSelected={option === isSelected}
            onClick={() => setIsSelected(option)}
          />
        ))}
      </ul> */}
    </>
  );
}

export default Header;