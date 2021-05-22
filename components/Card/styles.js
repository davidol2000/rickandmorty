import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  card: (props) => ({
    width: '18rem',
    position: 'relative',
    cursor: 'pointer',
    height: '25rem',
    background: props.bgColor,
    paddingBottom: '1em',
  }),
  cardMedia: {
    filter: 'grayscale(0)',
    '&:hover': {
      transform: 'scale(1.31)',
      transition: 'all 0.3s ease-in',
      filter: 'grayscale(60%) brightness(50%)',
    },
  },
  imageWrapper: {
    height: '18rem',
    overflow: 'hidden',
  },
  cardContent: (props) => ({
    wordWrap: 'break-word',
    fontSize: +props.nameLength > 26 ? '1.2rem' : '1.5rem',
  }),
  deadIcon: {
    color: 'red',
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: '60',
    height: '40px',
    width: '40px',
  },
});

export default styles;
