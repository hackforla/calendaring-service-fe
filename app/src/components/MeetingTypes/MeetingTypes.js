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
      {meetingTypes.map((type, i) => (
        <MeetingType type={type.type} updateNeeded={type.updateNeeded} key={i} />
      ))}
    </div>
  );
}
