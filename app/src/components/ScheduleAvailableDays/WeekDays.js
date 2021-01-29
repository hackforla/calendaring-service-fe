import React, { useReducer } from 'react';
import Day from './Day';
import { weekDays } from '../../store/index';
import { reducer } from './reducer';
const initialState = { weekDays };

export default function WeekDays() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className='body-text'>
        <p>What days are you typically available?</p>
        <p>Select from below.</p>
        <p onClick={() => dispatch({ type: 'TOGGLE_ALL' })}>
          Select / Unselect All
        </p>
      </div>
      {state.weekDays.map(({ day, selected }, idx) => (
        <Day day={day} selected={selected} idx={idx} dispatch={dispatch} />
      ))}
    </>
  );
}
