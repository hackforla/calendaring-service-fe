import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2.5rem',
    height: '90vh',
    overflowY: 'auto',
  },
  container: {
    margin: '0.7rem 0',
  },
  letterSpacing: {
    letterSpacing: '1px',
  },
  subheadingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subheading: {
    fontweight: 500,
    color: '#595959',
  },
  editButton: {
    fontSize: '18px',
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
    lineHeight: '56px',
  },
  text: {
    fontSize: '16px',
    color: '#2F2F2F',
    lineHeight: '32px',
  },
  bold: {
    fontWeight: 700,
  },
  dateContainer: {
    paddingBottom: '1.5rem',
  },
  dateRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: '1rem',
  },
  dayStyle: {
    fontWeight: 500,
  },
  date: {
    fontSize: '16px',
  },
  timeRange: {
    width: '140px',
    fontSize: '16px',
    lineHeight: '32px',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: '1rem',
  },
  navButtons: {
    letterSpacing: '1px',
  },
}));

export { useStyles };
