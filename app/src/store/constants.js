const daysOfTheWeek = [
  { day: 'Monday', selected: false },
  { day: 'Tuesday', selected: false },
  { day: 'Wednesday', selected: false },
  { day: 'Thursday', selected: false },
  { day: 'Friday', selected: false },
  { day: 'Saturday', selected: false },
  { day: 'Sunday', selected: false },
];

const meetingTypes = [
  {type: 'Training', updateNeeded: false},
  {type: 'Interview', updateNeeded: true},
  {type: 'Home Inspection', updateNeeded: true},
  {type: 'Home Selection', updateNeeded: false},
  {type: 'Home Visit', updateNeeded: true},
];

export { daysOfTheWeek, meetingTypes };
