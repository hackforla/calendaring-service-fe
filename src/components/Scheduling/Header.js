import React from 'react';
import { logo, Typography } from '../../utils/index';
import { useStyles } from './CalendarViewStyles';

export default function Header({ title, description, activity, children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={logo.default} className='logo' alt='logo' />
        <Typography variant='h4'>{title}</Typography>
      </div>
      <Typography
        variant='subtitle1'
        style={{
          marginBottom: '1rem',
          width: '200px',
          textAlign: 'center',
        }}>
          {description}
      </Typography>
      <Typography
        variant='h6'
        style={{
          marginBottom: '0.5rem',
        }}
        color='primary'>
        {activity}
      </Typography>
    </div>
  );
}
