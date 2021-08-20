/* eslint-disable object-curly-newline, no-unused-vars, react/forbid-prop-types, react/prop-types */
import React, { useState } from 'react';
import { AppBar, Grid, Toolbar, Card, CardContent, CircularProgress, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mockData from './mockData';
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
  const [pokemonData, setPokemonData] = useState(mockData);

  const getPokemonCard = (pokemonId) => {
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

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
