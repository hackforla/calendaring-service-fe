import React, { useReducer, useEffect, useState } from 'react';
import { logo, daysOfTheWeek, Button, Typography } from '../../store/index';
import { reducer } from './helpers/reducer';
import classes from './ScheduleAvailability.module.scss';
import ScheduleAvailableDays from './ScheduleAvailableDays';
const initialState = { daysOfTheWeek };

export default function ScheduleAvailability() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isEverySlected, setIsEverySelected] = useState(false);

  useEffect(() => {
    setButtonDisabled(!state.daysOfTheWeek.some((day) => day.selected));
    setIsEverySelected(!state.daysOfTheWeek.every((day) => day.selected));
  }, [state.daysOfTheWeek]);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.top}>
          <img src={logo.default} className='logo' alt='logo' />
          <Typography variant='h4'>Schedule Availability</Typography>
        </div>
        <Typography variant='body1'>
          What days are you typically available?
        </Typography>
        <Typography variant='body1'>Select from below.</Typography>
      </div>
      <ScheduleAvailableDays
        state={state}
        dispatch={dispatch}
        isEverySlected={isEverySlected}
      />
      <div className={classes.buttonContainer}>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary' disabled={buttonDisabled}>
          save & next
        </Button>
      </div>
    </>
  );
}
