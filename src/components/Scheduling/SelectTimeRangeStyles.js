import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
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
    fontSize: '16px',
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
  menuItemRoot: {
    fontSize: '14px',
  },
  menuList: {
    padding: '0',
  },
  listItemIconRoot: {
    minWidth: '40px',
    position: 'absolute',
    right: '0',
  },
  listItemHide: {
    display: 'none',
  },
  checkmarkRoot: {
    color: '#55B1EB',
  },
  checkmarkIcon: {
    fontSize: '17px',
  },
}));

export { useStyles };
