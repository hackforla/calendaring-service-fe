import React from 'react';
import Day from './Day';
import { weekDays } from '../../store/index';

export default function WeekDays() {
  return (
    <>
      {weekDays.map((day, idx) => (
          <Day day={day} key={idx} />
        
      ))}
    </>
  );
}
