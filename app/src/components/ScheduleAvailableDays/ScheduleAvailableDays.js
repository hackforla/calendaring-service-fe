import React, { useReducer, useEffect, useState } from 'react';
import classes from './ScheduleAvailableDays.module.scss';
import WeekDays from './WeekDays';
import { logo, daysOfTheWeek } from '../../store/index';
import { reducer } from './helpers/reducer';

import Button from '@material-ui/core/Button';
const initialState = { daysOfTheWeek };

export default function ScheduleAvailableDays() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    setButtonDisabled(!state.daysOfTheWeek.some((day) => day.selected));
  }, [state.daysOfTheWeek]);

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
          <Button
            onClick={() =>
              dispatch({ type: 'TOGGLE_ALL', payload: !buttonDisabled })
            }
          >
            {' '}
            Select / Unselect All
          </Button>
        </div>
      </div>
      <WeekDays state={state} dispatch={dispatch} />
      <div className={classes.buttonContainer}>
        <Button size='large' disabled={buttonDisabled}>
          cancel
        </Button>
        <Button size='large' color='primary'>
          save & next
        </Button>
      </div>
    </>
  );
}
