import React, { useState } from 'react';
import { BsDot } from '../store/index';
import classes from './Stepper.module.scss';

export default function Stepper() {
  const [step, setStep] = useState(0);
  const dots = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className={classes.main}>
        {dots.map((dot, i) => {
          return (
            <div
              className={i === step ? classes.stepSelected : classes.step}
              key={i}
            >
              <BsDot style={{ color: 'white', height: '80%', width: '80%' }} />
            </div>
          );
        })}
      </div>
      <button onClick={() => setStep(step - 1)}>-</button>
      <button onClick={() => setStep(step + 1)}>+</button>
    </>
  );
}
