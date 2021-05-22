import React from 'react';
import client from '../../utils/client';
import { gql } from '@apollo/client';
import { Grid, Typography, Paper, Container } from '@material-ui/core';
import styles from './styles';

export default function CharacterPage({ character }) {
  const classes = styles();
  const Param = ({ field, value }) => {
    return (
      <Grid
        item
        container
        direction="column"
        style={{ width: value.length > 15 ? '17rem' : '7rem' }}
      >
        <Grid item>
          <Typography variant="body1" className={classes.paramField}>
            {field}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.valueField}>
            {value}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Container maxWidth="lg">
      <Grid container direction="column" align="flex-start">
        <Grid item container justify="center">
          <Typography variant="h3" align="center" gutterBottom>
            {character.name}{' '}
            <span className={classes.nameSpan}>#{character.id}</span>
          </Typography>
        </Grid>

        <Grid item container direction="row" justify="space-between">
          <Grid item>
            <Paper className={classes.imgPaper}>
              <img
                src={character.image}
                alt={character.name}
                className={classes.image}
              />
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.info}
          >
            <Grid item>
              <Typography
                variant="h5"
                className={classes.infoWord}
                gutterBottom
              >
                Information
              </Typography>
            </Grid>
            <Grid item container direction="row" spacing={3}>
              {character.status && (
                <Param field="Status" value={character.status} />
              )}
              {character.species && (
                <Param field="Species" value={character.species} />
              )}
              {character.type && <Param field="Type" value={character.type} />}
              {character.gender && (
                <Param field="Gender" value={character.gender} />
              )}
              {character.origin && (
                <Param field="Origin" value={character.origin.name} />
              )}
              {character.origin.dimension && (
                <Param
                  field="Origin dismension"
                  value={character.origin.dimension}
                />
              )}
              {character.location && (
                <Param field="Location" value={character.location.name} />
              )}
              {character.location.dimension && (
                <Param
                  field="Location dimension"
                  value={character.location.dimension}
                />
              )}
              {character.episode && (
                <Param field="Episodes" value={character.episode.length} />
              )}
              {character.episode[0] && (
                <Param
                  field="First episode"
                  value={`${character.episode[0].episode} | ${character.episode[0].name}`}
                />
              )}
              {character.episode[character.episode.length - 1] && (
                <Param
                  field="Last episode"
                  value={`${
                    character.episode[character.episode.length - 1].episode
                  } | ${character.episode[character.episode.length - 1].name}`}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getServerSideProps(ctx) {
  const charId = +ctx.query.id;
  const QUERY = gql`
    query Query($characterId: ID!) {
      character(id: $characterId) {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          type
          dimension
        }
        location {
          id
          name
          type
          dimension
        }
        image
        episode {
          id
          name
          episode
        }
        created
      }
    }
  `;
  const rawData = await client.query({
    query: QUERY,
    variables: { characterId: charId },
  });
  return {
    props: {
      character: rawData.data.character,
    },
  };
}
