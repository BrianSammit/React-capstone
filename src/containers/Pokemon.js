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

  useEffect(() => {
    dispatch(fetchPokemonDetails(pokeID));
  }, []);

  return (
    <div className="container-detail">
      {!loading && !!detail ? (
        <div className="detailCard">
          <div className="detail-title">
            <h2>{toFirtCharUpperCase(pokedetail.name)}</h2>
          </div>
          <img className="detail-image" src={pokedetail.sprites.front_default} alt="pokemonLogo" />
          <Typography variant="h4">Pokemon Info</Typography>
          <div className="types-cont">
            <Typography component="span">
              {'Species: '}
              <div className="detail-link">{pokedetail.name}</div>
            </Typography>
          </div>
          <div className="types-cont">
            <Typography variant="h5"> Abilities:</Typography>
            {pokedetail.abilities.map((typeInfo) => {
              const { ability } = typeInfo;
              const { name } = ability;

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
            src="https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal.jpg"
            alt="not found"
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
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Pokemon;
