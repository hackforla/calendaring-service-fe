import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
  subheadingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subheading: {
    fontweight: 500,
    color: '#595959',
    letterSpacing: '1px',
  },
  editButton: {
    fontSize: '18px',
    color: '#249BE5',
    letterSpacing: '1px',
    textTransform: 'capitalize',
    lineHeight: '56px',
  },
  text: {
    fontSize: '16px',
    color: '#2F2F2F',
    letterSpacing: '1px',
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
  day: {
    letterSpacing: '1px',
    fontWeight: 500,
  },
  date: {
    letterSpacing: '1px',
    fontSize: '16px',
  },
  timeRange: {
    letterSpacing: '1px',
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
    textTransform: 'capitalize',
  },
});

export { useStyles };
