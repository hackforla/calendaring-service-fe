import { useState, useEffect, useCallback } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import styles from './CalendarView.css';
import Header from './Header';
import { Button, Typography } from '../../utils/index';
import { useStyles } from './CalendarViewStyles';

export default function CalendarView() {
  const classes = useStyles();
  const [selectedDays, setSelectedDays] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleButtonNext = useCallback(() => {
    if (selectedDays.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [selectedDays.length]);

  useEffect(() => {
    handleButtonNext()
  }, [handleButtonNext, selectedDays]);

  // Month is 0-indexed, ex. April is 3 instead of 4
  // Date selected styles:
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
      color: '#2F2F2F',
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
    setSelectedDays(copySelectedDays);
  };

  const WEEKDAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <>
      <Header
        title="Schedule with Tracy"
        description="Select from Tracy's availability for"
        activity="Training"
      />
      <Typography
        variant='subtitle1'
        className={classes.subtitle}
      >
        {buttonDisabled
          ? 'Choose a date'
          : 'Date selected'
        }
      </Typography>
      <div>
        <DayPicker
          className={styles}
          showOutsideDays
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          onDayClick={handleDayClick}
          selectedDays={selectedDays}
          weekdaysShort={WEEKDAYS_SHORT}
        />
      </div>

      <div className={classes.buttonContainer}>
        <Button size='large'>Go Back</Button>
        <Button size='large' color='primary' disabled={buttonDisabled}>
          Next
        </Button>
      </div>
    </>
  );
}
