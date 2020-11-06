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
          rel="noopener noreferrer"
        >
          <button>
            Download
          </button>
        </a>
      </li>
      <li className='list-item'>
        <span>Pré 2</span>
        <a 
          href='https://drive.google.com/drive/folders/1WjzaMbg5nyF0Ipha5qcv2WemkdAtgkzi?usp=sharing'
          target='_blank'
          rel="noopener noreferrer"
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