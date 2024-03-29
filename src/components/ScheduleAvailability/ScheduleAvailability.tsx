import React, { useReducer } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './Header';
import { reducer, initialState } from './store/reducer';
import ScheduleAvailableDays from './ScheduleAvailableDays';
import { Link } from 'react-router-dom';

export default function ScheduleAvailability() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const buttonDisabled = !state.daysOfTheWeek.some((day) => day.selected);
  const isEverySelected = !state.daysOfTheWeek.every((day) => day.selected);

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
        <Button variant='text' size='large' component={Link} to='/'>
          cancel
        </Button>
        <Button
          size='large'
          component={Link}
          to='/scheduletimes'
          disabled={buttonDisabled}
        >
          save & next
        </Button>
      </div>
    </>
  );
}
