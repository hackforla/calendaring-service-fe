import React from 'react';
import classes from './ScheduleAvailableDays.module.scss';
import WeekDays from './WeekDays';
import { logo } from '../../store/index';

export default function ScheduleAvailableDays() {
  return (
    <>
      <div className={classes.main}>
        <div className={classes.top}>
          <img src={logo.default} className='logo' alt='logo' />
          <h4>Schedule Availability</h4>
        </div>
        <div className='body-text'>
          <p>What days are you typically available?</p>
          <p>Select from below.</p>
          <p>Select / Unselect All</p>
        </div>
      </div>
      <WeekDays />
      <button>Cancel</button>
      <button>Save & Next</button>
    </>
  );
}
