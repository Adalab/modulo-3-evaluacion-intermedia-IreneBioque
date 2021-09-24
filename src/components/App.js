import { useState } from 'react';
import '../styles/App.scss';
import data from './data.json';

function App() {
  const [clubs, setClubs] = useState(data);
  const [newClub, setNewClub] = useState({
    name: '',
    openOnWeekdays: '',
    openOnWeekend: '',
  });
  const renderClubs = () => {
    return clubs.map((club, i) => {
      return (
        <li key={i} id={i}>
          <p>Nombre: {club.name}</p>
          <p>Abierto entre semana: {club.openOnWeekdays ? 'Si' : 'No'}</p>
          <p>Abierto el fin de semana: {club.openOnWeekend ? 'Si' : 'No'}</p>
        </li>
      );
    });
  };
  const handleAddClubs = (ev) => {
    if (ev.currentTarget.id === 'name') {
      setNewClub({ ...newClub, name: ev.currentTarget.value });
    } else if (
      ev.currentTarget.id === 'midweek' &&
      ev.currentTarget.checked === true
    ) {
      setNewClub({ ...newClub, openOnWeekdays: true });
    } else if (
      ev.currentTarget.id === 'midweek' &&
      ev.currentTarget.checked === false
    ) {
      setNewClub({ ...newClub, openOnWeekdays: false });
    } else if (
      ev.currentTarget.id === 'weekend' &&
      ev.currentTarget.checked === true
    ) {
      setNewClub({ ...newClub, openOnWeekend: true });
    } else if (
      ev.currentTarget.id === 'weekend' &&
      ev.currentTarget.checked === false
    ) {
      setNewClub({ ...newClub, openOnWeekend: false });
    }
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setClubs([...clubs, newClub]);
  };
  return (
    <div>
      <h1>Mis clubs</h1>
      <ul>{renderClubs()}</ul>
      <form className='form'>
        <h2>Añadir un nuevo club</h2>
        <label>
          Nombre del club{' '}
          <input type='text' onChange={handleAddClubs} id='name' />
        </label>
        <label>
          ¿Abre entre semana?{' '}
          <input type='checkbox' onChange={handleAddClubs} id='midweek' />
        </label>
        <label>
          ¿Abre los fines semana?{' '}
          <input type='checkbox' onChange={handleAddClubs} id='weekend' />
        </label>
        <button className='button' onClick={handleClick}>
          Añadir un nuevo club
        </button>
      </form>
    </div>
  );
}

export default App;
