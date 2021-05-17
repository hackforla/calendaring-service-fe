import React from 'react';
import { logo, Typography, ArrowDropDownIcon } from '../../store/index';
import { useStyles } from './CalendarViewStyles';

export default function Header({
  title,
  description,
  activity,
  action,
  slots,
}) {
  const classes = useStyles();
  const slotsDoubled = slots * 2;

  const actionText = () => {
    if (action && slots) {
      return (
        <Typography
          variant='body2'
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
          }}>
          {`${action} (${slotsDoubled} total)`}
        </Typography>
      );
    } else {
      return (
        <Typography
          variant='body2'
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
          }}>
          {action}
        </Typography>
      );
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img src={logo.default} className='logo' alt='logo' />
        <Typography
          variant='h4'
          style={{
            fontSize: '24px',
          }}>
          {title}
        </Typography>
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

      {actionText()}

      <div className={classes.headerTimeZone}>
        <Typography
          variant='body2'
          style={{
            fontWeight: '200',
          }}>
          Pacific Standard Time (US and Canada)
        </Typography>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
