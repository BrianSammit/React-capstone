import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = (props) => {
  const { match } = props;
  const { params } = match;
  const { pokemonId } = params;
  return <div>{`this is de pokemon page for pokemon  #${pokemonId}`}</div>;
};

Pokemon.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.any.isRequired,
};

export default Pokemon;
