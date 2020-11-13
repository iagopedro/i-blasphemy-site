import React from 'react';
import Options from './components/Options';
import Main from './components/Main';

import './global.css';

function App() {
  return (
    <div className='main-container'>
      <Options options={['FOTOS', 'MÚSICAS', 'DOCUMENTOS']} />
      <Main />
    </div>
  );
}

export default App;
