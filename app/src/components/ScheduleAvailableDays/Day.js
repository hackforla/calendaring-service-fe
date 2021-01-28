import React, { useState } from 'react';
import classes from './Day.module.scss';

export default function Day({ day }) {
  const [selected, setSelected] = useState(false);
  return (
    <div className={classes.day} onClick={(e) => setSelected()}>
      <input type='checkbox' selected={selected} onChange={setSelected} />
      {day}
    </div>
  );
}
