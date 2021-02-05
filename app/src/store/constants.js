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
  { type: 'Training', updateNeeded: false },
  { type: 'Interview', updateNeeded: true },
  { type: 'Home Inspection', updateNeeded: true },
  { type: 'Home Selection', updateNeeded: false },
  { type: 'Home Visit', updateNeeded: true },
];

const formFields = [
  {
    name: 'MeetingName',
    inputs: ['ten', 'twenty', 'thirty'],
  },
  {
    name: 'Location',
    inputs: ['In person meeting', 'Web conference', 'Phone call'],
  },
  {
    name: 'Is this meeting location on-site?',
    inputs: ['Yes', 'No'],
  },
  {
    name: 'Duration',
    inputs: [15, 30, 45, 60, 90],
  },
  {
    name: 'Meeting Color',
    inputs: ['Red', 'Pink', 'Purple', 'Blue', 'Green'],
  },
  {
    name: 'Description',
  },
];

export { daysOfTheWeek, meetingTypes };
