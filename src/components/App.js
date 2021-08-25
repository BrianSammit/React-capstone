import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Pokedex from '../containers/Pokedex';
import Pokemon from '../containers/Pokemon';
import '../assets/SCSS/App.scss';

const App = () => (
  <div className="App">
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Pokedex} />
        <Route exact path="/:pokemonId" component={Pokemon} />
      </Switch>
    </Router>
  </div>
);

export default App;
