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
          name={'Ódio'}
          link={'https://drive.google.com/file/d/1nvrI3KMZ_oL6tiOsY6m3z8FkqIZxKgeR/view?usp=sharing'}
        />
      <li className='list-category'>Prés</li>
        <Item 
          name={'Extinção'}
          link={'https://drive.google.com/file/d/11dsiJlwPvIq4i-cU0GKDp-CBaG7d-E1u/view?usp=sharing'}
        />
        <Item 
          name={'Vai Dar Certo'}
          link={'https://drive.google.com/file/d/1vAT6QXreQ2dmiN0mIzTUmoC2oTVT_J9X/view?usp=sharing'}
        />
        <Item 
          name={'Legado'}
          link={'https://drive.google.com/file/d/1Gk7dVl1hnAlEwrRPQcNZuF_wEiM2Rij7/view?usp=sharing'}
        />
      <li className='list-category'>Fotos</li>
        <Item 
          name={'Ensaio - Monte dos Guararapes'}
          link={'https://drive.google.com/drive/folders/1WZdwJbE8ILf2-zjOEp9xokklahebGQJh?usp=sharing'}
        />
        <Item 
          name={'Ensaio - 21/06/2020'}
          link={'https://drive.google.com/drive/folders/1x_bqoHkrBiCbMAk0wnTer4NjLGA-fd6T?usp=sharing'}
        />
      <li className='list-category'>Documentos</li>
        <Item 
          name={'Release'}
          link={'https://docs.google.com/document/d/1KROG8InETJx6_bltV36PNKvpjZs4Tef1GyhJKNfEvBg/edit?usp=sharing'}
        />
      <li className='list-category'>Letras</li>
       <Item 
        name={'Atormentado'}
        link={'https://drive.google.com/file/d/1Cz53BDep1vHdErpf_wSXXi0NkqfbQeQ3/view?usp=sharing'}
       />
       <Item 
        name={'Desespero'}
        link={'https://drive.google.com/file/d/1CLuEDcG4AoqINpE1D_r7Un1Xf05qwNc2/view?usp=sharing'}
       />
       <Item 
        name={'Extinção'}
        link={'https://drive.google.com/file/d/18HNYSfIR_n8VPT2Lo2oic3q74PcjZUAf/view?usp=sharing'}
       />
       <Item 
        name={'Ódio'}
        link={'https://drive.google.com/file/d/1_Ujwh-LIMkwgME6lhJDgqF-LoR7DRJNH/view?usp=sharing'}
       />
       <Item 
        name={'Vida Maldita'}
        link={'https://drive.google.com/file/d/1fCyWo3n2NdtiBk9acQU8AfOSG1Q1FRLi/view?usp=sharing'}
       />
    </ul>
  );
}

export default Main;