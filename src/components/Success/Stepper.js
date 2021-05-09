import React, { useState } from 'react';
import { FiberManualRecordIcon, Typography } from '../../utils/index';
import ForDevsEyesOnly from './ForDevsEyesOnly';
import classes from './Stepper.module.scss';

export default function Stepper() {
  const [step, setStep] = useState(0);
  const dots = [0, 1, 2, 3, 4, 5];

  function stepChanger(str) {
    if (str === 'increment' && step < 5) {
      setStep(step + 1);
    }
    if (str === 'decrement' && step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <div className={classes.main}>
      <Typography variant='h6'>Your progress</Typography>
      <div className={classes.stepBar}>
        {dots.map((_, i) => {
          return (
            <div
              className={i <= step ? classes.stepSelected : classes.step}
              key={i}
            >
              <FiberManualRecordIcon
                style={{ height: '1rem' }}
                className={classes.dot}
              />
            </div>
          );
        })}
      </div>
      <Typography variant='body2' className='p1'>
        Step {step + 1} of {dots.length} complete.
      </Typography>
      {/* Uncomment the component below to test the progress bar */}
      <ForDevsEyesOnly stepChanger={stepChanger} />
    </div>
  );
}
