import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    border: '1px solid #595959',
    borderRadius: '4px',
    fontSize: '14px',
  },
  icon: {
    minWidth: 10,
    paddingRight: 10,
  },
  selectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  select: {
    padding: 1,
    width: '48%',
    minWidth: 150,
  },
  dropdown: {
    height: '46px',
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
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);


export { useStyles, BootstrapInput };