import React from 'react';
import classes from './Day.module.scss';
import Checkbox from '@material-ui/core/Checkbox';

export default function Day({ day, selected, dispatch, idx }) {

  return (
    <div
      className={classes.day}
      onClick={(e) => dispatch({ type: 'TOGGLE_SELECTED', payload: idx })}
    >
      <Checkbox
        readOnly
        checked={selected}
        color='primary'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p>{day}</p>
    </div>
  );
}
