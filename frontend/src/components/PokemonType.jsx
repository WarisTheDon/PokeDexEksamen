import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PokemonType.css'; // sørg for å ha denne css-filen

const PokemonType = () => {
  const { typeName } = useParams();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/type/${typeName}`);
        const promises = response.data.pokemon.map(pokeData =>
          axios.get(pokeData.pokemon.url).then(res => res.data)
        );
        const results = await Promise.all(promises);
        setPokemons(results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the Pokémon:', error);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, [typeName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemons.length) {
    return <div>No Pokémon found for type "{typeName}"</div>;
  }

  return (
    <div className="pokemon-type-container">
      <h2>{typeName.toUpperCase()} TYPE POKÉMON</h2>
      <div className="pokemon-grid">
        {pokemons.map(pokemon => (
          <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id} className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <span>#{pokemon.id.toString().padStart(3, '0')}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonType;
