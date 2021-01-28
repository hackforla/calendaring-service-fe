import React, { useState } from 'react';
import classes from './WeekDays.module.scss';

export default function Day({ day }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={classes.day}>
      <input type='checkbox' selected={selected} onChange={setSelected} />
      {day}
    </div>
  );
}
