import React from 'react';
import Stepper from './Stepper';
import classes from './Success.module.scss';

import { CheckCircleIcon, Button, Typography } from '../../utils/index';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <>
    <div className={classes.main}>
      <CheckCircleIcon
        className={classes.checkCircle}
        style={{ height: '5rem', width: '5rem' }}
      />
      <Typography variant='h5'>Success!</Typography>
      <Stepper />
      <Typography variant='body1' className='body-text'>
        Thanks for setting up your availability! We will use this information
        when you customize your meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </Typography>
      <Link to="/meetingtypes">
        <Button variant='contained' color='primary'>
          complete setup
        </Button>
      </Link>
    </div>
    </>
  );
}
