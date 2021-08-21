/* eslint-disable object-curly-newline, no-unused-vars, react/forbid-prop-types,
react/jsx-one-expression-per-line, camelcase, react/prop-types */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography, Link, CircularProgress, Button } from '@material-ui/core';
import axios from 'axios';
import toFirtCharUpperCase from './constants';

const Pokemon = (props) => {
  const { history, match } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((response) => {
        const { data } = response;
        setPokemon(data);
      })
      .catch((error) => {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return (
      <>
        <Typography variant="h1">
          {`${id}.`} {toFirtCharUpperCase(name)}
          <img alt="" src={front_default} />
        </Typography>
        <img style={{ width: '300px', height: '300px' }} src={fullImageUrl} alt="" />
        <Typography variant="h3">Pokemon info</Typography>
        <Typography>
          Species
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
      </>
    );
  };
  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography>Pokemon no found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push('/')}>
          back to pokedex
        </Button>
      )}
    </>
  );
};

Pokemon.propTypes = {
  match: PropTypes.any.isRequired,
};

export default Pokemon;

/* eslint-enable object-curly-newline, no-unused-vars, react/forbid-prop-types,
react/jsx-one-expression-per-line, camelcase, react/prop-types */
