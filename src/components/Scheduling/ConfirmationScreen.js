import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import moment from 'moment';
import { useStyles } from './ConfirmationStyles';
import Header from './Header';
import ListSelectedDateAndTimes from './ListSelectedDateAndTimes';

const HARD_CODED_DATA = {
  caseWorker: 'Tracy',
  firstName: 'Nina',
  lastName: 'Mosley',
  email: 'nina99@gmail.com',
  phoneNumber: '+1 (213) 555-5555',
  selectedDays: [
    {
      date: 'June 6, 2020',
      selectedTimes: ['1pm-2pm', '3pm-4pm'],
    },
    {
      date: 'June 15, 2020',
      selectedTimes: ['11am-12pm', '4pm-5pm'],
    },
    {
      date: 'June 22, 2020',
      selectedTimes: ['3pm-4pm'],
    },
  ],
};

export default function ConfirmationScreen() {
  const classes = useStyles();
  const [data, setData] = useState({
    caseWorker: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedDays: [
      {
        date: '',
        selectedTimes: [],
      },
    ],
  });

  useEffect(() => {
    setData(HARD_CODED_DATA);
  }, []);

  return (
    <div className={classes.root}>
      <Header
        title="Confirmation"
        description="Review the information below is correct before proceeding"
        activity="Home Inspection with Tracy"
      />

      {/* Personal Information */}
      <div className={classes.container}>
        <div className={classes.subheadingContainer}>
          <Typography variant="body1" className={classes.subheading}>
            Personal Information
          </Typography>
          <Button color="primary" className={classes.editButton}>
            Edit
          </Button>
        </div>

        <Typography className={classes.text}>
          <span className={classes.bold}>Name:</span> {data.firstName}{' '}
          {data.lastName}
        </Typography>
        <Typography className={classes.text}>
          <span className={classes.bold}>Email:</span> {data.email}
        </Typography>
        <Typography className={classes.text}>
          <span className={classes.bold}>Phone:</span> {data.phoneNumber}
        </Typography>
      </div>

      {/* Dates and Times */}
      <div className={classes.container}>
        <div className={classes.subheadingContainer}>
          <Typography variant="body1" className={classes.subheading}>
            Dates and Times
          </Typography>
          <Button color="primary" className={classes.editButton}>
            Edit
          </Button>
        </div>

        {data.selectedDays.length > 0 &&
          data.selectedDays.map((item, index) => (
            <ListSelectedDateAndTimes
              day={moment(item.date).format('dddd')}
              date={item.date}
              times={item.selectedTimes}
              key={index}
            />
          ))}
      </div>

      <div className={classes.buttonContainer}>
        <Button size="large">
          <span className={classes.navButtons}>Go Back</span>
        </Button>
        <Button size="large" color="primary">
          <span className={classes.navButtons}>Submit</span>
        </Button>
      </div>
    </div>
  );
}
