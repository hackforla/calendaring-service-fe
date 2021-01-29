import React from 'react';
import classes from './Day.module.scss';

export default function Day({ day, selected, dispatch, idx }) {
  return (
    <div
      className={classes.day}
      onClick={(e) => dispatch({ type: 'TOGGLE_SELECTED', payload: idx })}
    >
      <input type='checkbox' checked={selected} readOnly />
      {day}
    </div>
  );
}
