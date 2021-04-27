import React from 'react';
import { logo, Typography } from '../../store/index';
import { useStyles } from './CalendarViewStyles';

export default function Header({ textOptions }) {
  const classes = useStyles();

  const getActionText = () => {
    if (textOptions === 'CalendarSelectedTimes') {
      return 'Choose time range';
    }
    if (textOptions) {
      return 'Choose a date';
    }
    if (!textOptions) {
      return 'Date selected';
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={logo.default} className='logo' alt='logo' />
        <Typography variant='h4'>Schedule with Tracy</Typography>
      </div>
      <Typography
        variant='body2'
        style={{
          fontSize: '14px',
          marginBottom: '1rem',
          width: '200px',
          textAlign: 'center',
        }}>
        {textOptions === 'CalendarSelectedTimes'
          ? 'Choose your time availability for the selected days'
          : 'Select from Tracy’s availability for'}
      </Typography>
      <Typography
        variant='body1'
        style={{
          fontWeight: '500',
          marginBottom: '0.5rem',
        }}
        color='primary'>
        Training
      </Typography>
      <Typography
        variant='body2'
        style={{
          fontSize: '14px',
          marginBottom: '1rem',
        }}>
        {getActionText()}
      </Typography>
    </div>
  );
}
