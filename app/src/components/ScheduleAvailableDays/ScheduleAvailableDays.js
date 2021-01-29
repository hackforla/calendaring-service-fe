import React, { useReducer, useEffect, useState } from 'react';
import classes from './ScheduleAvailableDays.module.scss';
import WeekDays from './WeekDays';
import { logo } from '../../store/index';
import { weekDays } from '../../store/index';
import { reducer } from './reducer';
const initialState = { weekDays };

export default function ScheduleAvailableDays() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!state.weekDays.some((day) => day.selected));
  }, [state.weekDays]);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.top}>
          <img src={logo.default} className='logo' alt='logo' />
          <h4>Schedule Availability</h4>
        </div>
        <div className='body-text'>
          <p>What days are you typically available?</p>
          <p>Select from below.</p>
          <p onClick={() => dispatch({ type: 'TOGGLE_ALL' })}>
            Select / Unselect All
          </p>
        </div>
      </div>
      <WeekDays state={state} dispatch={dispatch} />
      <button>Cancel</button>
      <button
        disabled={buttonDisabled}
        className={buttonDisabled ? classes.disabled : classes.enabled}
      >
        Save & Next
      </button>
    </>
  );
}
