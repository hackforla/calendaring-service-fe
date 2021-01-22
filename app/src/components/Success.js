import React, { useState } from 'react';
import Stepper from './Stepper';
import classes from './Success.module.scss';
import { FaCheckCircle } from '../store/index';

export default function Success() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={classes.main}>
      <FaCheckCircle
        style={{ color: '#249BE5', height: '5rem', width: '5rem' }}
      />
      <h1>Success!</h1>
      <h3>Your progress</h3>
      <Stepper />
      <p>
        Thanks for setting up your availability! We will use this information
        when you customize yoru meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </p>
      <button>COMPLETE SETUP</button>
    </div>
  );
}
