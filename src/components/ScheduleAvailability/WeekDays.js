import React from 'react';
import Day from './Day';

export default function WeekDays({ dispatch, state }) {
  return (
    <>
      {state.daysOfTheWeek.map(({ day, selected }, idx) => (
        <Day
          day={day}
          selected={selected}
          idx={idx}
          key={idx}
          dispatch={dispatch}
        />
      ))}
    </>
  );
}
