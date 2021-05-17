import { React, useState, useEffect } from 'react';
import Header from './Header';
import SelectTimeRange from './SelectTimeRange';
import ProgressButtons from '../shared/ProgressButtons';

const MOCK_DATA_SELECTED_DATES = [
  {
    day: 'Monday',
    date: 'May 3, 2021',
    availableTimes: ['12pm-1pm', '1pm-2pm', '2pm-3pm', '4pm-5pm'],
  },
  {
    day: 'Tuesday',
    date: 'May 4, 2021',
    availableTimes: ['2pm-3pm', '3pm-4pm', '5pm-6pm'],
  },
  {
    day: 'Wednesday',
    date: 'May 6, 2021',
    availableTimes: ['12pm-1pm', '1pm-2pm', '2pm-3pm', '4pm-5pm'],
  },
];

export default function CalendarSelectedTimes() {
  const [slots, setSlots] = useState(MOCK_DATA_SELECTED_DATES.length);
  const [allSelectedTimes, setAllSelectedTimes] = useState({
    Monday: {
      date: 'May 3, 2021',
      selectedTimes: [],
    },
    Tuesday: {
      date: 'May 4, 2021',
      selectedTimes: [],
    },
    Wednesday: {
      date: 'May 5, 2021',
      selectedTimes: [],
    },
  });

  useEffect(() => {
    console.log(allSelectedTimes);
  }, [allSelectedTimes]);

  return (
    <div>
      <Header
        title='Schedule with Tracy'
        description='Choose your time availability for the selected days'
        activity='Home Inspection'
        action='Choose up to 2 times per day'
        slots={slots}
      />

      {MOCK_DATA_SELECTED_DATES.map((selected, index) => {
        return (
          <SelectTimeRange
            key={index}
            day={selected.day}
            date={selected.date}
            availableTimes={selected.availableTimes}
            setAllSelectedTimes={setAllSelectedTimes}
            allSelectedTimes={allSelectedTimes}
          />
        );
      })}

      <ProgressButtons firstBtnText='Go Back' secondBtnText='Next' />
    </div>
  );
}
