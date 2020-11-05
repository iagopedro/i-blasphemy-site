import React from 'react';

import './styles.css';

function Main() {
  return (
    <ul className='list-group'>
      <li className='list-item'>
        <span>Atormentado</span>
        <a 
          href='https://drive.google.com/file/d/1aB6RxdCXdQLJ_1eT6jbeuFZmMWVhcxi-/view?usp=sharing'
          target='_blank'
        >
          <button>
            Download
          </button>
        </a>
      </li>
    </ul>
  );
}

export default Main;