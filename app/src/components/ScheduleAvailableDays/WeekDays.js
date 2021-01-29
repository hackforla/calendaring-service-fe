import React from 'react';
import Day from './Day';

export default function WeekDays({ dispatch, state }) {
  return (
    <>
      {state.weekDays.map(({ day, selected }, idx) => (
        <Day day={day} selected={selected} idx={idx} key={idx} dispatch={dispatch} />
      ))}
    </>
  );
}
