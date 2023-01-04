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
  getTimesArray,
  get24HrTime,
  Typography,
  ArrowForwardIcon,
  Card,
} from '../../utils/index';
import { useStyles, BootstrapInput } from './ScheduleAvailableTimesStyles';
import { Link } from 'react-router-dom';

let initialValues = {
  start: '',
  end: '',
};

export default function ScheduleAvailableTimes() {
  const [state, setState] = useState(initialValues);
  const { card, h6, selectRow, svg, select, dropdown, buttonContainer } =
    useStyles();
  let isFormComplete = Object.values(state).every((item) => item !== '');

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Header />
      <Card className={card}>
        <Typography variant='subtitle1' align='center'>
          You can further customize your availability by day and time when
          customizing your meeting types later.
        </Typography>
      </Card>
      <Typography variant='h6' className={h6}>
        Daily Availability
      </Typography>
      <FormGroup row className={selectRow}>
        <ArrowForwardIcon className={svg} />
        <FormControl className={select}>
          <FormHelperText>From</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => handleChange(e)}
            value={state.start}
            className={dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required
            name='start'
            IconComponent={KeyboardArrowDownIcon}
          >
            {getTimesArray().map((input) => (
              <MenuItem key={input} value={input}>
                {input}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={select}>
          <FormHelperText>To</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => handleChange(e)}
            value={state.end}
            className={dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required
            name='end'
            IconComponent={KeyboardArrowDownIcon}
          >
            {getTimesArray(get24HrTime(state.start || '9:00 AM')).map(
              (input) => (
                <MenuItem key={input} value={input}>
                  {input}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </FormGroup>
      <div className={buttonContainer}>
        <Button size='large' component={Link} to='/scheduledays'>
          cancel
        </Button>
        <Button
          size='large'
          color='primary'
          disabled={!isFormComplete}
          component={Link}
          to='/success'
        >
          save & next
        </Button>
      </div>
    </>
  );
}
