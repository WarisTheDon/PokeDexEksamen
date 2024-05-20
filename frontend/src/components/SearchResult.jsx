import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchResult.css';

const SearchResult = () => {
  const { searchTerm } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the Pokémon:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>No Pokémon found with name "{searchTerm}"</div>;
  }

  return (
    <div className="pokemon-details">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="pokemon-info">
        <div className="types">
          <h3>TYPE(S)</h3>
          {pokemon.types.map((typeInfo) => (
            <span key={typeInfo.type.name} className="type">
              {typeInfo.type.name}
            </span>
          ))}
        </div>
        <div className="stats">
          <h3>STATS</h3>
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="stat">
              <strong>{stat.stat.name}:</strong> {stat.base_stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
