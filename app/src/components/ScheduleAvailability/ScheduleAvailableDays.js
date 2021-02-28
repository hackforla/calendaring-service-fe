import React from 'react';
import WeekDays from './WeekDays';
import { Button } from '../../store/index';
import classes from './ScheduleAvailableDays.module.scss';

export default function ScheduleAvailableDays({
  dispatch,
  isEverySlected,
  state,
}) {
  return (
    <div className={classes.main}>
      <Button
        onClick={() =>
          dispatch({ type: 'TOGGLE_ALL', payload: isEverySlected })
        }
      >
        {' '}
        Select / Unselect All
      </Button>
      <WeekDays state={state} dispatch={dispatch} />
    </div>
  );
}
