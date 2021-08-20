import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

/* eslint-disable react/jsx-props-no-spreading */

function App() {
  return (
    <Switch>
      <Route exact path='/' render={(props) => <Pokedex {...props} />} />
      <Route exact path='/:pokemonId' render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}

export default App;
