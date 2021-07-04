import { makeStyles } from '../../utils';

export const useStyles = makeStyles({
  stepBar: {
    height: '20px',
    width: '90%',
    borderRadius: '0.8rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '0 auto',
  },
  stepStyle: {
    width: '100%',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    '&:last-child': {
      borderRadius: '0 0.8rem 0.8rem 0',
    },
    '&:first-child': {
      borderRadius: '0.8rem 0 0 0.8rem',
    },
  },
  stepSelected: {
    width: '100%',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    '&:last-child': {
      borderRadius: '0 0.8rem 0.8rem 0',
    },
    '&:first-child': {
      borderRadius: '0.8rem 0 0 0.8rem',
    },
  },
});
