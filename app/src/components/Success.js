import React, { useState } from 'react';
import Stepper from 'react-stepper-horizontal';
import { FaCheckCircle } from '../store/index';

export default function Success() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <FaCheckCircle style={{ color: '#249BE5' }} />
      <h1>Success!</h1>
      <h3>Your progress</h3>
      <Stepper
        steps={[
          { title: 'Step One' },
          { title: 'Step Two' },
          { title: 'Step Three' },
          { title: 'Step Four' },
        ]}
        activeStep={activeStep}
      />
      <button onClick={() => setActiveStep(activeStep - 1)}>Step--</button>
      <button onClick={() => setActiveStep(activeStep + 1)}>Step++</button>
      <p>
        Thanks for setting up your availability! We will use this information
        when you customize yoru meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </p>
      <button>COMPLETE SETUP</button>
    </div>
  );
}
