import React from 'react';
import classes from './Day.module.scss';

export default function Day({ day, selected, dispatch, idx }) {
  return (
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
  );
}
