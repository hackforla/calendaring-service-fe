import { React, useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
// import 'react-day-picker/lib/style.css';
import styles from './CalendarView.css';
import { logo, Typography, Button } from '../../store/index';
import { useStyles } from './CalendarViewStyles';

export default function CalendarView() {
  const classes = useStyles();
  const [selectedDays, handleDayChange] = useState([]);

  // month is 0-indexed, ex. April is 3 instead of 4
  const modifiers = {
    preferred: [
      new Date(2021, 3, 4),
      new Date(2021, 3, 11),
      new Date(2021, 3, 14),
      new Date(2021, 3, 20),
    ],
    selected: selectedDays,
  };
  const modifiersStyles = {
    selected: {
      color: 'white',
      backgroundColor: '#249BE5',
    },
    preferred: {
      color: 'black',
      backgroundColor: '#ACD9F5',
    },
  };

  const handleDayClick = (day, { selected }) => {
    const copySelectedDays = selectedDays.concat();
    if (selected) {
      const selectedIndex = copySelectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day)
      );
      copySelectedDays.splice(selectedIndex, 1);
    } else {
      copySelectedDays.push(day);
    }
    handleDayChange(copySelectedDays);
  };

  const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.header}>
          <img src={logo.default} className='logo' alt='logo' />
          <Typography variant='h4'>Schedule with Tracy</Typography>
        </div>
        <Typography
          variant='body2'
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
          }}>
          Select from Tracy’s availability for
        </Typography>
        <Typography
          variant='body1'
          style={{
            fontWeight: '500',
            marginBottom: '0.5rem',
          }}
          color='primary'>
          Training
        </Typography>
        <Typography
          variant='body2'
          style={{
            fontSize: '14px',
            marginBottom: '1rem',
          }}>
          Choose a date
        </Typography>
      </div>

      <div>
        <DayPicker
          // className={styles}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          onDayClick={handleDayClick}
          selectedDays={selectedDays}
          weekdaysShort={WEEKDAYS_SHORT}
        />
      </div>

      <div className={classes.buttonContainer}>
        <Button size='large'>Go Back</Button>
        <Button size='large' color='primary' disabled={true}>
          Next
        </Button>
      </div>
    </div>
  );
}
