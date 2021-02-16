import React from 'react';
import classes from './DashboardBody.module.scss';
import { welcome } from '../../store/index';
import Button from '@material-ui/core/Button';

export default function DashboardBody() {
  return (
    <>
      <h5>Welcome</h5>
      <img
        src={welcome.default}
        alt='welcome'
        style={{ width: '90%', margin: '1rem auto' }}
      />
      <p className='body-text'>
        This onbarding guide will show you how to add your avalibility, and
        customize your meeting types.
      </p>
      <div className={classes.buttonContainer}>
        <Button variant='contained' color='primary'>
          let's get started
        </Button>
      </div>
    </>
  );
}
