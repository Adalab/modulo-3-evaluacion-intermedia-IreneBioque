import { useState } from 'react';
import '../styles/App.scss';
import data from './data.json';

function App() {
  const [clubs, setClubs] = useState(data);
  const [search, setSearch] = useState('all');
  // const [deleted, setDeleted] = useState('');
  const [newClub, setNewClub] = useState({
    name: '',
    openOnWeekdays: '',
    openOnWeekend: '',
  });
  const renderClubs = () => {
    return clubs
      .filter((club) => {
        if (search === 'midweek') {
          return club.openOnWeekdays === true;
        } else if (search === 'weekend') {
          return club.openOnWeekend === true;
        } else {
          return true;
        }
      })
      .map((club, i) => {
        return (
          <li className='listclub__li' key={i} id={i}>
            <p>Nombre: {club.name}</p>
            <p>Abierto entre semana: {club.openOnWeekdays ? 'Si' : 'No'}</p>
            <p>Abierto el fin de semana: {club.openOnWeekend ? 'Si' : 'No'}</p>
            <i class='far fa-times-circle' onClick={handleDelete}></i>
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
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  };
  const handleDelete = (ev) => {
    console.log(ev.currentTarget.id);
    if (ev.currentTarget.id === clubs.id) {
    }
  };
  return (
    <div>
      <header className='header'>
        <h1 className='header__title'>Mis clubs</h1>
        <select className='header__select' onChange={handleSearch}>
          <option value='all'>todos</option>
          <option value='midweek'>los que abren entre semana</option>
          <option value='weekend'>los que abren el fin de semana</option>
        </select>
      </header>
      <main className='main'>
        <ul className='listclub'>{renderClubs()}</ul>
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
      </main>
    </div>
  );
}

export default App;
