import React, { useReducer, useEffect, useState } from 'react';
import { daysOfTheWeek, Button } from '../../utils/index';
import Header from './Header';
import { reducer } from './store/reducer';
import ScheduleAvailableDays from './ScheduleAvailableDays';
import { Link } from 'react-router-dom';
const initialState = { daysOfTheWeek };


export default function ScheduleAvailability() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isEverySelected, setIsEverySelected] = useState(false);

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
        isEverySelected={isEverySelected}
      />
      <div
        style={{
          float: 'right',
          padding: '1rem 3rem',
        }}
      >
        <Button size='large' component={Link} to="/">
          cancel
        </Button>
        <Button
        size='large'
        color='primary'
        component={Link}
        to="/scheduletimes"
        disabled={buttonDisabled}>
          save & next
        </Button>
      </div>
    </>
  );
}
