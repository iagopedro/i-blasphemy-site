import React from 'react';

import Item from './Item';

import './styles.css';

function Main({ isSelected }) {
  return (
    <ul className='list-group'>
      <Item 
        name={'Atormentado'}
        link={'https://drive.google.com/file/d/1aB6RxdCXdQLJ_1eT6jbeuFZmMWVhcxi-/view?usp=sharing'}
      />
    </ul>
  );
}

export default Main;