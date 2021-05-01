import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem',
  },
  editButton: {
    width: '37px',
    height: '22px',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: '0',
    bottom: '40px',
    right: '20px',
    textTransform: 'capitalize',
    letterSpacing: '1px',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
  inputWidth: {
    width: '65%',
  },
  required: {
    color: 'red',
  },
  disabled: {
    color: '#2F2F2F',
  },
})

export { useStyles };