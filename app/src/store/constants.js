import { LocationOnIcon, VideocamIcon, PhoneIcon } from './index';
import moment from 'moment';

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
    inputs: meetingTypes,
  },
  {
    name: 'Location',
    inputs: [
      {
        name: 'In person meeting',
        icon: <LocationOnIcon size='large' color='primary' />,
      },
      {
        name: 'Web conference',
        icon: <VideocamIcon size='large' color='primary' />,
      },
      { name: 'Phone call', icon: <PhoneIcon size='large' color='primary' /> },
    ],
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
    inputs: [
      { name: 'Red', hex: '#FF3559' },
      { name: 'Pink', hex: '#FF4F9E' },
      { name: 'Purple', hex: '#8673FF' },
      { name: 'Blue', hex: '#3D8EFF' },
      { name: 'Green', hex: '#4FCB03' },
    ],
  },
];


const locale = 'en'; // or whatever you want...
const hours = [];

moment.locale(locale); // optional - can remove if you are only dealing with one locale

for (let hour = 9; hour < 18; hour++) {
  hours.push(moment({ hour }).format('h:mm A'));
  hours.push(
    moment({
      hour,
      minute: 30,
    }).format('h:mm A')
  );
}

export { daysOfTheWeek, meetingTypes, formFields, hours };
