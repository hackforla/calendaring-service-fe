import React from 'react';
import { Button } from '../../utils/index';
import { initialState } from './store/reducer';
import Day from './Day';

interface ScheduleAvailableDaysProps {
  dispatch: React.Dispatch<any>;
  isEverySelected: boolean;
  state: typeof initialState;
}

export default function ScheduleAvailableDays({
  dispatch,
  isEverySelected,
  state,
}: ScheduleAvailableDaysProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        color='primary'
        onClick={() =>
          dispatch({ type: 'TOGGLE_ALL', payload: isEverySelected })
        }
      >
        {isEverySelected ? 'Select All' : 'Unselect All'}
      </Button>
      {state.daysOfTheWeek.map(({ day, selected }, idx) => (
        <Day
          day={day}
          selected={selected}
          idx={idx}
          key={idx}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
