import React, { useState } from 'react';
import { AppBar, Grid, Toolbar, Card, CardContent, CircularProgress, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mockData from './mockData';

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRigth: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  CardContent: {
    textAlign: 'center',
  },
});

const toFirtsCharUpperCase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  const getPokemonCard = (pokemonId) => {
    console.log(pokemonData[`${pokemonId}`]);
    const { id, name } = pokemonData[`${pokemonId}`];
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <Grid item xs={4} key={pokemonId}>
        <Card>
          <CardMedia className={classes.cardMedia} image={sprite} style={{ width: '130px', height: '130px' }} />
          <CardContent className={classes.CardContent}>
            <Typography>{`${id}. ${toFirtsCharUpperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position='static'>
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
