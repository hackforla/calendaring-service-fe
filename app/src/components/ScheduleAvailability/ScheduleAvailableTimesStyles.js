import { makeStyles, InputBase, withStyles } from '../../store/index';

const useStyles = makeStyles({
  selectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,
    position: 'relative',
  },
  h6: {
    paddingLeft: '1rem',
  },
  card: { background: '#F4FBFF', margin: '1rem', padding: '1rem' },
  select: {
    padding: 1,
    width: '40%',
    minWidth: 125,
  },
  svg: {
    position: 'absolute',
    left: '47%',
    top: '50%',
  },
  dropdown: {
    height: '46px',
  },
  buttonContainer: {
    textAlign: 'right',
  },
});

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      border: '1px solid #595959',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #595959',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    display: 'flex',
    alignItems: 'center',
  },
}))(InputBase);

export { useStyles, BootstrapInput };
