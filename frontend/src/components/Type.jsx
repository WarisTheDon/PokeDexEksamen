import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import PokemonType from './components/PokemonType';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:slug" element={<Team />} />
        <Route path="/type/:typeName" element={<PokemonType />} />
        {/* Ensure you have a route for individual Pokemon */}
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};

export default App;
