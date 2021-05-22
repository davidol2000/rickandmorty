import React from 'react';
import Card from '../../Card';
import { Grid } from '@material-ui/core';

export default function Layout({ characters }) {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      alignItems="center"
      justify="center"
    >
      {characters.map((character) => (
        <Grid item key={character.id}>
          <Card character={character} />
        </Grid>
      ))}
    </Grid>
  );
}
