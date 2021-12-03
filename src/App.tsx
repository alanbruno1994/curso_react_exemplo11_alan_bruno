import React, { useState } from 'react';
import './App.css';
import useMyFetch from './hooks/my_fetch';

function App() {
  const [cep,setCEP]=useState('')
  const city=useMyFetch(cep)//Qaundo o estado do hook mudar vai gerar novos dados e vai atualizar o componente

  return (
    <div className="App">
      <input type='text' value={cep} onChange={event=>setCEP(event.target.value)} />
      <p>{city?.city}-{city?.uf}-{city?.district}</p>
    </div>
  );
}

export default App;
