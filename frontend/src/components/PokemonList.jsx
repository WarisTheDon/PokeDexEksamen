import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PokemonType.css'; // Create a CSS file for styling

const PokemonType = () => {
  const { typeName } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
        setPokemons(response.data.pokemon.map(p => p.pokemon));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon by type:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [typeName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemon-type-container">
      <h2>Pokémon of type: {typeName}</h2>
      <div className="pokemon-grid">
        {pokemons.map(pokemon => (
          <div className="pokemon-card" key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonType; // Ensure the component is exported as default
