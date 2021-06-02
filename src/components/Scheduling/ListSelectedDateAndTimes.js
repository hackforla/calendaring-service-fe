import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './ConfirmationStyles';

export default function ListSelectedDateAndTimes({ day, date, times }) {
  const classes = useStyles();
  let renderTimes;

  // times is an array with a maximum amount of 2 time range items.
  if (times.length === 2) {
    renderTimes = (
      <>
        <Typography className={classes.timeRange}>{times[0]},</Typography>
        <Typography className={classes.timeRange}>{times[1]}</Typography>
      </>
    );
  } else if (times.length === 1) {
    renderTimes = (
      <Typography className={classes.timeRange}>{times[0]}</Typography>
    );
  } else {
    renderTimes = null;
  }

  return (
    <div className={classes.dateContainer}>
      <div className={classes.dateRow}>
        <Typography variant="body1" className={classes.day}>
          {day}
        </Typography>
        <Typography className={classes.date}>{date}</Typography>
      </div>
      {renderTimes}
    </div>
  );
}
