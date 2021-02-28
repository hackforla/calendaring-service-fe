import React, { useState } from 'react';
import Header from './Header';
import {
  Button,
  FormGroup,
  FormControl,
  FormHelperText,
  Select,
  KeyboardArrowDownIcon,
  MenuItem,
  hours,
  Typography,
  ArrowForwardIcon,
  Card,
} from '../../store/index';
import { useStyles, BootstrapInput } from './ScheduleAvailableTimesStyles';

let initialValues = {
  start: '',
  end: '',
};

export default function ScheduleAvailableTimes() {
  const [state, setState] = useState(initialValues);
  const classes = useStyles();
  let isFormComplete = Object.values(state).every((item) => item !== '');

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Header />
      <Card className={classes.card}>
        <Typography variant='subtitle1' align='center'>
          You can further customize your availability by day and time when
          customizing your meeting types later.
        </Typography>
      </Card>
      <Typography variant='h6' className={classes.h6}>
        Daily Availability
      </Typography>
      <FormGroup row className={classes.selectRow}>
        <ArrowForwardIcon className={classes.svg} />
        <FormControl className={classes.select}>
          <FormHelperText>From</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => handleChange(e)}
            value={state.start}
            className={classes.dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required
            name='start'
            IconComponent={KeyboardArrowDownIcon}
          >
            {hours.map((input) => (
              <MenuItem key={input} value={input}>
                {input}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.select}>
          <FormHelperText>To</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => handleChange(e)}
            value={state.end}
            className={classes.dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required
            name='end'
            IconComponent={KeyboardArrowDownIcon}
          >
            {hours.map((input) => (
              <MenuItem key={input} value={input}>
                {input}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
      <div className={classes.buttonContainer}>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary' disabled={!isFormComplete}>
          save & next
        </Button>
      </div>
    </>
  );
}
