import React from 'react';
import classes from './DashboardBody.module.scss'
export default function DashboardBody() {
  return (
    <>
      <h5>Welcome</h5>
      <div className={classes.placeholder}>image placeholder</div>
      <p className='body-text'>
        This onbarding guide will show you how to add your avalibility, and
        customize your meeting types.
      </p>
      <div className={classes.buttonContainer}>
        <button>let's get started</button>
      </div>
    </>
  );
}
