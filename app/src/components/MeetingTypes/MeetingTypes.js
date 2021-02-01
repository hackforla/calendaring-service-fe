import React from 'react';
import Stepper from '../Success/Stepper';
import { meetingTypes } from '../../store/index';
import Header from '../Welcome/Header';
import MeetingType from './MeetingType';

export default function MeetingTypes() {
  return (
    <div>
      <Header />
      <Stepper />
      <p className="caption">
      To complete your setup, you must update your preferences for all the below meetings.

      </p>
      {meetingTypes.map((type, i) => (
        <MeetingType type={type.type} updateNeeded={type.updateNeeded} key={i} />
      ))}
    </div>
  );
}
