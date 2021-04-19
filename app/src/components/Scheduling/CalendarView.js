import { React, useState } from 'react';
import { logo, Typography, Button, Paper } from '../../store/index';
import { useStaticState, Calendar } from '@material-ui/pickers';
import { useStyles } from './CalendarViewStyles';

export default function CalendarView() {
  const classes = useStyles();
  const [value, handleDateChange] = useState(new Date());
  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  const { pickerProps, wrapperProps } = useStaticState({
    value,
    onChange: handleDateChange,
  });

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
      <Paper
        style={{
          overflow: 'hidden',
          margin: '1rem',
          border: '1px solid #E6E6E6',
          boxShadow: '0px 2px 4px #E6E6E6',
        }}>
        <Calendar {...pickerProps} />
      </Paper>
      <div className={classes.buttonContainer}>
        <Button size='large'>Go Back</Button>
        <Button size='large' color='primary' disabled={true}>
          Next
        </Button>
      </div>
    </div>
  );
}
