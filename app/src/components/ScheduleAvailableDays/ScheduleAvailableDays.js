import React from 'react';
import classes from './ScheduleAvailableDays.module.scss';
import { logo, weekDays } from '../../store/index';

export default function ScheduleAvailableDays() {
  console.log(weekDays);
  return (
    <>
      <div className={classes.main}>
        <div className={classes.top}>
          <img src={logo.default} className='logo' alt='logo' />
          <h4>My Dashboard</h4>
        </div>
        <div className='body-text'>
          <p>What days are you typically available?</p>
          <p>Select from below.</p>
        </div>
      </div>
      {weekDays.map((day, idx) => (
        <div className={classes.day} key={idx}>
          {day}
        </div>
      ))}
    </>
  );
}
