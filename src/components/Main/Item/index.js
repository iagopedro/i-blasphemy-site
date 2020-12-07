import React from 'react';

import './styles.css';

function Item({ name, link }) {
  return (
    <>
    <li className='list-item'>
        <span>{name}</span>
        <a 
            href={link}
            target='_blank'
            rel="noopener noreferrer"
        >
            <button>
            Ir para o Drive
            </button>
        </a>
        </li>
    </>
  );
}

export default Item;