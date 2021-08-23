/* eslint-disable object-curly-newline, no-unused-vars, react/forbid-prop-types, react/prop-types, max-len */
import React, { useState, useEffect } from 'react';
import { AppBar, Grid, Toolbar, Card, CardContent, CircularProgress, CardMedia, Typography, Input, TextField } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import toFirtCharUpperCase from './constants';

const useStyles = makeStyles((theme) => ({
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
  searchContainer: {
    display: 'flex',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  },
  searchIcon: {
    alignSelf: 'flex-end',
    marginBottom: '5px',
  },
  searchInput: {
    width: '200px',
    margin: '5px',
  },
}));

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

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
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField className={classes.searchInput} onChange={handleSearchChange} label="Pokemon" variant="standard" />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map((pokemonId) => pokemonData[pokemonId].name.includes(filter) && getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;

/* eslint-enable object-curly-newline, no-unused-vars, react/forbid-prop-types, max-len */
