import React from 'react';
import Stepper from './Stepper';
import classes from './Success.module.scss';
import { FaCheckCircle } from '../store/index';

export default function Success() {
  return (
    <div className={classes.main}>
      <FaCheckCircle className={classes.checkCircle} />
      <h1>Success!</h1>
      <Stepper />
      <p>
        Thanks for setting up your availability! We will use this information
        when you customize your meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </p>
      <button>COMPLETE SETUP</button>
    </div>
  );
}
