import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './containers/Pokemon';
import Pokedex from './containers/Pokedex';

/* eslint-disable react/jsx-props-no-spreading */

const App = () => (
  <Switch>
    <Router>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
    </Router>
  </Switch>
);

export default App;
