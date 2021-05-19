import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1rem',
  },
  inputRow: {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  staticInput: {
    padding: '12px 4rem 12px 2rem',
    boxSizing: 'border-box',
    borderRadius: '5px',
    height: '48px',
  },
  EditableInput: {
    padding: '12px 0 12px 2rem',
    boxSizing: 'border-box',
    borderRadius: '5px',
    height: '48px',
    width: '75%',
  },
  formSpace: {
    marginBottom: '1.5rem',
  },
  letterSpacing: {
    letterSpacing: '1px',
    lineHeight: '32px',
  },
  editButton: {
    position: 'absolute',
    right: 0,
    top: 6,
    textTransform: 'capitalize',
    letterSpacing: '1px',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
  required: {
    color: 'red',
  },
  disabled: {
    color: '#2F2F2F',
  },
});

export { useStyles };
