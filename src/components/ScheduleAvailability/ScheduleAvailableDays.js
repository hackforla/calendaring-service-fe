import React from 'react';
import WeekDays from './WeekDays';
import { Button } from '../../utils/index';

export default function ScheduleAvailableDays({
  dispatch,
  isEverySelected,
  state,
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={() =>
          dispatch({ type: 'TOGGLE_ALL', payload: isEverySelected })
        }
      >
        {' '}
        Select / Unselect All
      </Button>
      <WeekDays state={state} dispatch={dispatch} />
    </div>
  );
}
