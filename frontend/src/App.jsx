import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import PokemonType from './components/PokemonType';
import Pokemon from './components/Pokemon';
import SearchResult from './components/SearchResult';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:slug" element={<Team />} />
          <Route path="/type/:typeName" element={<PokemonType />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/search/:searchTerm" element={<SearchResult />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
