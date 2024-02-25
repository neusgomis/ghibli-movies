import { useState } from 'react';
import './index.css';
import Films from './components/Films.jsx';
import Characters from './components/Characters.jsx';

const App = () => {

  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [filmsVisible, setFilmsVisible] = useState(false);
  const [charactersVisible, setCharactersVisible] = useState(false);

  const getPeople = () => {
    fetch('https://api-ghibli.herokuapp.com/people')
    .then(res => res.json())
    .then(data => setPeople(data))
    setCharactersVisible(true); // Show characters component
    setFilmsVisible(false); // Hide films component
  }

  const getFilms = () => {
    fetch('http://api-ghibli.herokuapp.com/films')
    .then(res => res.json())
    .then(data => setFilms(data))
    .catch(error => console.error('Error fetching films', error));
    setFilmsVisible(true); // Show films component
    setCharactersVisible(false); // Hide characters component
  }

  return (
    <div className="container d-flex flex-column justify-content-center">
      <p className="text-center mt-3">Studio Ghibli was founded in 1985 by animated film directors
        Isao Takahata and Hayao Miyazaki, and has produced twenty-two
        feature-length films. Most Studio Ghibli films ranked number
        one at the box office in Japan in the year in which they were
        released. SPIRITED AWAY, directed by Hayao Miyazaki and released
         in 2001, is the all-time highest grossing film in Japan,
         earning over 30 billion yen at the box office.</p>
      <div className="btn-container d-flex justify-content-center">
        <button className="btn btn-primary m-1" onClick={() => getFilms()}>Load Films</button>
        <button className="btn btn-secondary m-1" onClick={() => getPeople()}>Load Characters</button>
      </div>
      {filmsVisible && <Films films={films} />}
      {charactersVisible && <Characters people={people} />}
    </div>
  )
}

export default App;
