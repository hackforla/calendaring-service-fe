import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  timeRange: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '2rem 4rem',
  },
  subHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLabelRoot: {
    color: '#2F2F2F',
    fontSize: '16px',
  },
  inputOutlined: {
    transform: 'translate(14px, 16px) scale(1)',
  },
  selectRoot: {
    fontSize: '14px',
  },
  selectIcon: {
    color: '#2F2F2F',
  },
  selectOutlined: {
    padding: '12.5px 14px',
  },
  selectIconOutlined: {
    right: '20px',
  },
  menuItem: {
    fontSize: '14px',
  },
  menuList: {
    padding: '0',
  },
}));

export { useStyles };
