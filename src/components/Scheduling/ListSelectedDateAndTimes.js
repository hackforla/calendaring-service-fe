import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './ConfirmationStyles';

export default function ListSelectedDateAndTimes({ day, date, times }) {
  const { timeRange, letterSpacing, dateContainer, dateRow, dayStyle } =
    useStyles();
  let renderTimes;

  // times is an array with a maximum amount of 2 time range items.
  if (times.length === 2) {
    renderTimes = (
      <>
        <Typography className={[timeRange, letterSpacing]}>
          {times[0]},
        </Typography>
        <Typography className={[timeRange, letterSpacing]}>
          {times[1]}
        </Typography>
      </>
    );
  } else if (times.length === 1) {
    renderTimes = (
      <Typography className={[timeRange, letterSpacing]}>{times[0]}</Typography>
    );
  } else {
    renderTimes = null;
  }

  return (
    <div className={dateContainer}>
      <div className={dateRow}>
        <Typography variant='body1' className={[dayStyle, letterSpacing]}>
          {day}
        </Typography>
        <Typography className={[date, letterSpacing]}>{date}</Typography>
      </div>
      {renderTimes}
    </div>
  );
}
