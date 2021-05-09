import React, { useReducer, useEffect, useState } from 'react';
import { daysOfTheWeek, Button } from '../../utils/index';
import Header from './Header';
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
      <Header />
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
