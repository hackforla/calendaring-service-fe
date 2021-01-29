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
      </div>
      <WeekDays />
      <button>Cancel</button>
      <button>Save & Next</button>
    </>
  );
}
