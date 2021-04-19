import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem 3rem',
    gap: '2rem',
  },
  img: {
    height: '7rem',
    width: '7rem',
  },
});

export { useStyles };
