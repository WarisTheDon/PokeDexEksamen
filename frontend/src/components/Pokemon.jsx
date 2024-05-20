import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Pokemon.css'; // sørg for at du har riktig CSS for Pokemon-kortet

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching the Pokémon:', error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-detail-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Types: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
    </div>
  );
};

export default Pokemon;
