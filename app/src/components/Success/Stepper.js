import React, { useState } from 'react';
import { BsDot } from '../../store/index';
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
      <h6>Your progress</h6>
      <div className={classes.stepBar}>
        {dots.map((dot, i) => {
          return (
            <div
              className={i === step ? classes.stepSelected : classes.step}
              key={i}
            >
              <BsDot className={classes.dot} />
            </div>
          );
        })}
      </div>
      <p className={classes.caption}>
        Step {step + 1} of {dots.length} complete.
      </p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => stepChanger('decrement')}>-</button>
        <button onClick={() => stepChanger('increment')}>+</button>
        <p> ⬅ buttons for devs to play with progress bar</p>
      </div>
    </div>
  );
}
