import { useState } from 'react';
import '../styles/App.scss';
import data from './data.json';

function App() {
  const [clubs, setClubs] = useState(data);
  const [search, setSearch] = useState('all');
  // const [deleted, setDeleted] = useState('');
  const [name, setName] = useState('');
  const [openOnWeekdays, setOpenOnWeekdays] = useState(false);
  const [openOnWeekend, setOpenOnWeekend] = useState(false);

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
            <i
              className='far fa-times-circle'
              onClick={handleDelete}
              id={i}
            ></i>
          </li>
        );
      });
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleOpenWeekdays = (e) => {
    setOpenOnWeekdays(e.target.checked);
  };
  const handleOpenOnWeekend = (e) => {
    setOpenOnWeekend(e.target.checked);
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    clubs.push({
      name: name,
      openOnWeekdays: openOnWeekdays,
      openOnWeekend: openOnWeekend,
    });
    setClubs([...clubs]);
  };
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  };
  const handleDelete = (ev) => {
    const id = ev.currentTarget.parentElement.id;
    if (id === ev.currentTarget.id) {
      clubs.splice(id, 1);
      setClubs([...clubs]);
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
            <input type='text' onChange={handleName} id='name' />
          </label>
          <label>
            ¿Abre entre semana?{' '}
            <input
              type='checkbox'
              onChange={handleOpenWeekdays}
              id='midweek'
              checked={openOnWeekdays}
            />
          </label>
          <label>
            ¿Abre los fines semana?{' '}
            <input
              type='checkbox'
              onChange={handleOpenOnWeekend}
              id='weekend'
            />
          </label>
          <button
            className='button'
            onClick={handleClick}
            checked={openOnWeekend}
          >
            Añadir un nuevo club
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
