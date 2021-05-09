import React from 'react';
import classes from './DashboardBody.module.scss';
import { welcome, Button, Typography } from '../../utils/index';

export default function DashboardBody() {
  return (
    <>
      <Typography variant='h5' style={{ margin: '1rem' }}>
        Welcome
      </Typography>
      <img
        src={welcome.default}
        alt='welcome'
        style={{ width: '90%', margin: '1rem auto' }}
      />
      <Typography variant='body1' className='body-text'>
        This onbarding guide will show you how to add your avalibility, and
        customize your meeting types.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button variant='contained' color='primary'>
          let's get started
        </Button>
      </div>
    </>
  );
}
