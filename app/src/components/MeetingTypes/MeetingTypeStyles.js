import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderTop: '15px solid #3D8EFF',
    margin: '1rem',
    padding: '1rem',
  },
  title: {
    fontSize: 24,
    margin: '0',
    fontWeight: '700',
  },
  body: {
    margin: '0',
    color: '#249BE5',
  },
  icon: {
    height: '48px',
    width: '48px',
  },
});

export { useStyles };
