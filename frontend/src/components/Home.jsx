import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then(response => response.json())
      .then(data => {
        const fetches = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
        Promise.all(fetches).then(results => setPokemons(results));
      });

    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results));
  }, []);

  const handleTypeClick = (typeName) => {
    navigate(`/type/${typeName}`);
  };

  const handlePokemonClick = (pokemonName) => {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <main>
      <section className="main-pokemons">
        <h2>Main Pokemons</h2>
        <div className="pokemon-grid">
          {pokemons.map(pokemon => (
            <div 
              className="pokemon-card" 
              key={pokemon.id} 
              onClick={() => handlePokemonClick(pokemon.name)}
            >
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <span>#{pokemon.id.toString().padStart(3, '0')}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="types">
        <h2>Types</h2>
        <div className="types-grid">
          {types.map(type => (
            <div
              className="type-card"
              key={type.name}
              onClick={() => handleTypeClick(type.name)}
            >
              <p>{type.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
