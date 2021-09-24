// import { useState } from 'react';
import '../styles/App.scss';
// import data from './data.json';

function App() {
  return (
    <div>
      <h1>Mis clubs</h1>
      <ul></ul>
      <form className='form'>
        <h2>Añadir un nuevo club</h2>
        <label>
          Nombre del club <input type='text' />
        </label>
        <label>
          ¿Abre entre semana? <input type='checkbox' />
        </label>
        <label>
          ¿Abre los fines semana? <input type='checkbox' />
        </label>
        <button className='button'>Añadir un nuevo club</button>
      </form>
    </div>
  );
}

export default App;
