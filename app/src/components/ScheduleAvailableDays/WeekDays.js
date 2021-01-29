import React, { useReducer } from 'react';
import classes from './Day.module.scss';
import { weekDays } from '../../store/index';
import { reducer } from './reducer';

const initialState = { weekDays };

export default function WeekDays() {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'TOGGLE_ALL' })}>
        toggle all
      </button>
      {state.weekDays.map(({ day, selected }, idx) => (
        <div className={classes.day}>
          <input
            type='checkbox'
            checked={selected}
            onChange={(e) =>
              dispatch({ type: 'TOGGLE_SELECTED', payload: idx })
            }
          />
          {day}
        </div>
      ))}
    </>
  );
}
