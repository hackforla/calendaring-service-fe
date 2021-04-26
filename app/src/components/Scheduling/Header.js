import React from 'react';
import { logo, Typography } from '../../store/index';
import { useStyles } from './CalendarViewStyles';

export default function Header({ buttonDisabled }) {
  const classes = useStyles();
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
        }}>
        Select from Tracy’s availability for
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
        {buttonDisabled ? 'Choose a date' : 'Date selected'}
      </Typography>
    </div>
  );
}
