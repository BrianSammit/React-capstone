/* eslint-disable object-curly-newline, no-unused-vars, react/forbid-prop-types, react/prop-types */
import React, { useState, useEffect } from 'react';
import { AppBar, Grid, Toolbar, Card, CardContent, CircularProgress, CardMedia, Typography, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import toFirtCharUpperCase from './constants';

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    padding: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  CardContent: {
    textAlign: 'center',
  },
});

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898').then((response) => {
      const { data } = response;
      const { results } = data;
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        };
      });
      setPokemonData(newPokemonData);
    });
  }, []);

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];

    return (
      <Grid item xs={4} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia className={classes.cardMedia} image={sprite} style={{ width: '130px', height: '130px' }} />
          <CardContent className={classes.CardContent}>
            <Typography>{`${id}. ${toFirtCharUpperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) => getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;

/* eslint-enable object-curly-newline, no-unused-vars, react/forbid-prop-types */
