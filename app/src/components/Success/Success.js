import React from 'react';
import Stepper from './Stepper';
import classes from './Success.module.scss';
import { CheckCircleIcon, Button } from '../../store/index';

export default function Success() {
  return (
    <div className={classes.main}>
      <CheckCircleIcon
        className={classes.checkCircle}
        style={{ height: '5rem', width: '5rem' }}
      />
      <h5>Success!</h5>
      <Stepper />
      <p className='body-text'>
        Thanks for setting up your availability! We will use this information
        when you customize your meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </p>
      <Button variant='contained' color='primary'>
        complete setup
      </Button>
    </div>
  );
}
