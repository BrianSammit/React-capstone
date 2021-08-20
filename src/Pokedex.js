import React from 'react';
import {
  AppBar, Grid, Toolbar, Card, CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRigth: '50px',
  },
});

const getPokemonCard = () => (
  <Grid item xs={4}>
    <Card>
      <CardContent>HI</CardContent>
    </Card>
  </Grid>
);

const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
      </Grid>
    </>
  );
};

export default Pokedex;
