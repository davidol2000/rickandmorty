import React, { useState } from 'react';
import {
  Card as MaterialCard,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import styles from './styles';
import { useRouter } from 'next/router';
import Moment from 'react-moment';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getBgColor = (status) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'linear-gradient(to right, #88D498, #1A936F)';
    case 'dead':
      return 'linear-gradient(to left, #F57F73, #F19E9C)';
    case 'unknown':
      return 'linear-gradient(to right, #CCCDC6, #BBBCB6)';
    default:
      return 'darkgray';
  }
};
export default function Card({ character }) {
  const classes = styles({
    bgColor: getBgColor(character.status),
    nameLength: character.name.length,
  });
  const router = useRouter();
  return (
    <MaterialCard
      className={classes.card}
      onClick={() => {
        router.push(`/character/${character.id}`);
      }}
    >
      {character.status.toLowerCase() === 'dead' && (
        <FontAwesomeIcon
          icon={faSkullCrossbones}
          className={classes.deadIcon}
        />
      )}
      <div className={classes.imageWrapper}>
        <CardMedia
          image={character.image}
          component="img"
          title={character.name}
          className={classes.cardMedia}
        />
      </div>
      <CardContent>
        <Typography variant="h5" className={classes.cardContent}>
          {character.name}
        </Typography>
        <Typography variant="h6" className={classes.cardContent}>
          <Moment fromNow>{character.created}</Moment>
        </Typography>
      </CardContent>
    </MaterialCard>
  );
}
