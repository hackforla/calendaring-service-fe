import React from 'react';
import { logo, Typography, ArrowDropDownIcon } from '../../utils/index';
import { useStyles } from './CalendarViewStyles';

export default function Header({
  title,
  description,
  activity,
  action,
  slots,
  maxSlots,
}) {
  const { root, header, headerTimeZone } = useStyles();

  const actionText = () => {
    if (maxSlots) {
      if (slots > 0) {
        return (
          <Typography
            variant='body2'
            style={{
              fontSize: '14px',
              marginBottom: '1rem',
            }}
          >
            You have chosen {slots} of {maxSlots}
          </Typography>
        );
      } else {
        return (
          <Typography
            variant='body2'
            style={{
              fontSize: '14px',
              marginBottom: '1rem',
            }}
          >
            {action} ({maxSlots} total)
          </Typography>
        );
      }
    } else {
      return;
    }
  };

  return (
    <div className={root}>
      <div className={header}>
        <img src={logo.default} className='logo' alt='logo' />
        <Typography
          variant='h4'
          style={{
            fontSize: '24px',
          }}
        >
          {title}
        </Typography>
      </div>
      <Typography
        variant='subtitle1'
        style={{
          marginBottom: '1rem',
          width: '200px',
          textAlign: 'center',
        }}
      >
        {description}
      </Typography>
      <Typography
        variant='h6'
        style={{
          marginBottom: '0.5rem',
        }}
        color='primary'
      >
        {activity}
      </Typography>

      {actionText()}

      <div className={headerTimeZone}>
        <Typography
          variant='body2'
          style={{
            fontWeight: '200',
          }}
        >
          Pacific Standard Time (US and Canada)
        </Typography>
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}
