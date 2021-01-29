import React from 'react';
import classes from './Day.module.scss';

export default function Day({ day, selected }) {
  return (
    <div className={classes.day}>
      <input type='checkbox' selected={selected} />
      {day}
    </div>
  );
}
