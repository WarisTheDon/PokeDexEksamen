import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';
import TeamMystic from '../assets/TeamMystic.png';
import TeamValor from '../assets/TeamValor.png';
import TeamInstinct from '../assets/TeamInstinct.png';

const Teams = () => {
  return (
    <div className="teams-container">
      <Link to="/teams/team-valor" className="team-card">
        <img src={TeamValor} alt="Team Valor" />
        <p>Team Valor</p>
      </Link>
      <Link to="/teams/team-mystic" className="team-card">
        <img src={TeamMystic} alt="Team Mystic" />
        <p>Team Mystic</p>
      </Link>
      <Link to="/teams/team-instinct" className="team-card">
        <img src={TeamInstinct} alt="Team Instinct" />
        <p>Team Instinct</p>
      </Link>
    </div>
  );
};

export default Teams;
