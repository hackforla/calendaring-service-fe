import React, { useState } from 'react';
import { FiberManualRecordIcon, Typography } from '../../utils';
import ForDevsEyesOnly from './ForDevsEyesOnly';
import { useStyles } from './StepperStyles';

export default function Stepper() {
  const [step, setStep] = useState(0);
  const dots = [0, 1, 2, 3, 4, 5];
  const { stepBar, stepStyle, stepSelected } = useStyles();
  function stepChanger(str) {
    if (str === 'increment' && step < 5) {
      setStep(step + 1);
    }
    if (str === 'decrement' && step > 0) {
      setStep(step - 1);
    }
  }

  function getStepColor(step, i) {
    return i <= step ? '#249be5' : '#e5e5e5';
  }

  return (
    <div style={{ width: '99%' }}>
      <Typography variant='h6' style={{ margin: '1rem' }}>
        Your progress
      </Typography>
      <div className={stepBar}>
        {dots.map((_, i) => (
          <div
            className={i <= step ? stepSelected : stepStyle}
            style={{ background: getStepColor(step, i) }}
            key={i}
          >
            <FiberManualRecordIcon style={{ height: '1rem', color: 'white' }} />
          </div>
        ))}
      </div>
      <Typography variant='body2' className='p1'>
        Step {step + 1} of {dots.length} complete.
      </Typography>
      {/* Uncomment the component below to test the progress bar */}
      <ForDevsEyesOnly stepChanger={stepChanger} />
    </div>
  );
}
