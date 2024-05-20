import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Team.css';

const Team = () => {
  const { slug } = useParams();
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      console.log(`Fetching team for slug: ${slug}`);

      try {
        const teamData = {
          'team-valor': [1, 4, 7], // Pokémon IDs for Team Valor
          'team-mystic': [2, 5, 8], // Pokémon IDs for Team Mystic
          'team-instinct': [3, 6, 9], // Pokémon IDs for Team Instinct
        };

        const teamPokemons = teamData[slug];
        console.log(`Team Pokemons: ${teamPokemons}`);

        if (!teamPokemons) {
          setTeam([]);
          setLoading(false);
          return;
        }

        const fetches = teamPokemons.map((id) =>
          axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        );

        const results = await Promise.all(fetches);
        setTeam(results.map((res) => res.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchTeam();
  }, [slug]);

  if (loading) return <div>Loading...</div>;

  if (team.length === 0) {
    return <div>No Pokémon found for this team.</div>;
  }

  return (
    <div className="team-container">
      <h2>Team {slug.split('-')[1].charAt(0).toUpperCase() + slug.split('-')[1].slice(1)}</h2>
      <div className="team-cards">
        {team.map((pokemon) => (
          <div className="team-card" key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <span>#{pokemon.id.toString().padStart(3, '0')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
