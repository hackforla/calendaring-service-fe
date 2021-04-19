import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
});

export { useStyles };
