import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
  nameSpan: {
    fontWeight: 'lighter',
    color: '#22ff',
  },
  imgPaper: {
    padding: '0.8em',
    background: 'linear-gradient(to left, #5C1FC7, #3C6AEE)',
    height: '326px',
    width: '326px',
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  infoWord: {
    color: 'white',
  },
  info: {
    width: '50vw',
    background: 'linear-gradient(to left, #5C1FC7, #3C6AEE)',
    padding: '1em',
    borderRadius: '10px',
  },
  paramField: {
    color: 'white',
    fontSize: '1.24rem',
  },
  valueField: {
    fontSize: '1.1rem',
  },
});

export default styles;
