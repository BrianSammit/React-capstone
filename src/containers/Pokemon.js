import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { fetchPokemonDetails } from '../actions/getData';
import toFirtCharUpperCase from '../constants/constants';

const Pokemon = (props) => {
  const { match } = props;
  const pokeID = match.params.pokemonId;
  const detail = useSelector((state) => state.detail);
  const { pokedetail, loading } = detail;
  const dispatch = useDispatch();
  const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedetail.id}.svg`;

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokeID));
  }, []);

  return (
    <div className="container-detail">
      {!loading && !!detail ? (
        <div className="detailCard">
          <div className="detail-title">
            <h2>{toFirtCharUpperCase(pokedetail.name)}</h2>
            <img src={pokedetail.sprites.front_default} alt="pokemonLogo" />
          </div>
          <img className="detail-image" src={fullImageUrl} alt="pokemonImage" />
          <Typography variant="h4">Pokemon Info</Typography>
          <div className="types-cont">
            <Typography>
              {'Species: '}
              <div className="detail-link">{pokedetail.name}</div>
            </Typography>
          </div>
          <div className="types-cont">
            <Typography variant="h5"> Abilities:</Typography>
            {pokedetail.abilities.map((typeInfo) => {
              const { ability } = typeInfo;
              const { name } = ability;
              // eslint-disable-next-line react/jsx-one-expression-per-line
              return (
                <Typography key={name} className="detail-types">
                  {`${name}`}
                </Typography>
              );
            })}
          </div>
          <div className="types-cont">
            <Typography variant="h5"> Types:</Typography>
            {pokedetail.types.map((typeInfo) => {
              const { type } = typeInfo;
              const { name } = type;
              // eslint-disable-next-line react/jsx-one-expression-per-line
              return (
                <Typography key={name} className="detail-types">
                  {`${name}`}
                </Typography>
              );
            })}
          </div>
          <Link to="/" className="backbtn">
            back to pokedex
          </Link>
        </div>
      ) : (
        <div className="detailCard1">
          <h1 className="title-notfound">Pokemon Not Found</h1>
          <img
            className="notfound-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7-yFH2sIlZAkCDB8_jcV040NBr4blWq-cTC81hqyQzLW4wAfm7M8Igbp4thtcOKu944&usqp=CAU"
            alt="pokemonpensante"
          />
          <Link to="/" className="backbtn1">
            back to pokedex
          </Link>
        </div>
      )}
    </div>
  );
};

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};

export default Pokemon;
