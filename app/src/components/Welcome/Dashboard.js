import React, { useState } from 'react';
import logo from '../../store/images/Logo.png'
import classes from './Dashboard.module.scss';

export default function Dashboard() {
  const [selected, setSelected] = useState('Meeting Types');
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.top}>
          <img src={logo} alt='' />
          <h4>My Dashboard</h4>
        </div>
        <div className={classes.bottom}>
          <p
            className={
              selected === 'Meeting Types' ? classes.border : classes.noBorder
            }
            onClick={() => setSelected('Meeting Types')}
          >
            Meeting Types
          </p>
          <p
            className={
              selected === 'My Schedule' ? classes.border : classes.noBorder
            }
            onClick={() => setSelected('My Schedule')}
          >
            My Schedule
          </p>
        </div>
      </div>
    </div>
  );
}
