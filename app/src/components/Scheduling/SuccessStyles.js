import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2rem',
    height: '75vh',
  },
  success: {
    letterSpacing: '1px',
    fontWeight: 700,
    margin: '1rem 0'
  },
  paragraph: {
    letterSpacing: '1px',
    lineHeight: '24px',
    textAlign: 'center',
    fontSize: '14px',
    marginBottom: '1.5rem',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
  dashboardButton: {
    letterSpacing: '1px',
    textTransform: 'capitalize',
  }
});

export { useStyles };