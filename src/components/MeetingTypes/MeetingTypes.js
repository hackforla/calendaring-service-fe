import React from 'react';
import Stepper from '../Success/Stepper';
import { meetingTypes, HelpIcon, Typography } from '../../utils/index';
import Header from '../Welcome/Header';
import MeetingType from './MeetingType';

export default function MeetingTypes() {
  return (
    <div>
      <Header />
      <Stepper />
      <Typography variant='body2' className='p1'>
        To complete your setup, you must update your preferences for all the
        below meetings.
      </Typography>
      {meetingTypes.map((type, i) => (
        <MeetingType
          type={type.type}
          updateNeeded={type.updateNeeded}
          key={i}
        />
      ))}
      <HelpIcon
        color='primary'
        style={{ height: '4rem', width: '4rem', margin: '0 1rem' }}
      />
    </div>
  );
}
