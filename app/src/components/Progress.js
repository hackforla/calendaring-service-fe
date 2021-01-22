import React from 'react';
import { Stepper } from 'react-stepper-horizontal';

export default function Progress() {
  return (
    <div>
      <Stepper
        steps={[
          { title: 'Step One' },
          { title: 'Step Two' },
          { title: 'Step Three' },
          { title: 'Step Four' },
        ]}
        activeStep={1}
      />
    </div>
  );
}
