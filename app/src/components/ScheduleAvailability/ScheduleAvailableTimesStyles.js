import { makeStyles, InputBase, withStyles } from '../../store/index';

const useStyles = makeStyles({
  selectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 15,
  },
  select: {
    padding: 1,
    width: '48%',
    minWidth: 150,
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
