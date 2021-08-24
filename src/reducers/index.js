import { combineReducers } from 'redux';
import pokemonReducer from './getPokemonReducer';
import detailReducer from './getDetailsReducer';
import nextPageReducer from './getNextPageReducer';

const rootReducer = combineReducers({
  page: nextPageReducer,
  pokemon: pokemonReducer,
  detail: detailReducer,
});

export default rootReducer;
