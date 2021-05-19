import React, { useState } from 'react';
import { logo } from '../../utils/index';
import classes from './Header.module.scss';
import { Typography } from '../../utils/index';

export default function Header() {
  const [selected, setSelected] = useState('Meeting Types');

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.top}>
          <img src={logo.default} className='logo' alt='logo' />
          <Typography variant='h4'>My Dashboard</Typography>
        </div>
        <div className={classes.bottom}>
          <Typography
            variant='body1'
            className={
              selected === 'Meeting Types' ? classes.border : classes.noBorder
            }
            onClick={(e) => setSelected(e.target.innerText)}
          >
            Meeting Types
          </Typography>
          <Typography
            variant='body1'
            className={
              selected === 'My Schedule' ? classes.border : classes.noBorder
            }
            onClick={(e) => setSelected(e.target.innerText)}
          >
            My Schedule
          </Typography>
        </div>
      </div>
    </div>
  );
}
