import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import searchIcon from '../assets/searchthing.png';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/search/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <a href="/"><img src={logo} alt="UIN POKEDEX" /></a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/teams">Teams</a></li>
        </ul>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for Pokémon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} alt="Search" />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
