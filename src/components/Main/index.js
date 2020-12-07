import React from 'react';

import Item from './Item';

import './styles.css';

function Main() {
  return (
    <ul className='list-group'>
      <li className='list-category'>Músicas</li>
      <Item 
        name={'Atormentado'}
        link={'https://drive.google.com/file/d/1aB6RxdCXdQLJ_1eT6jbeuFZmMWVhcxi-/view?usp=sharing'}
      />
      <Item 
        name={'Pré 02'}
        link={'https://drive.google.com/drive/folders/1WjzaMbg5nyF0Ipha5qcv2WemkdAtgkzi?usp=sharing'}
      />
      <li className='list-category'>Fotos</li>
      <Item 
        name={'Ensaio fotográfico no Monte dos Guararapes'}
        link={'https://drive.google.com/drive/folders/1kqYF44TVssrCY1J1uWXefCijA7alfMde?usp=sharing'}
      />
      <Item 
        name={'Ensaio - 21/06/2020'}
        link={'https://drive.google.com/drive/folders/1x_bqoHkrBiCbMAk0wnTer4NjLGA-fd6T?usp=sharing'}
      />
      <li className='list-category'>Documentos</li>
      <Item 
        name={'Letras'}
        link={'https://drive.google.com/drive/folders/1-AQEaCPSxPCdfs9kM3FALj6nZnPGKaR5?usp=sharing'}
      />
    </ul>
  );
}

export default Main;