import React, { useState } from 'react';
import Header from './Header';
import {
  Button,
  FormGroup,
  FormControl,
  FormHelperText,
  Select,
  KeyboardArrowDownIcon,
  formFields,
  MenuItem,
  ListItemIcon,
  FiberManualRecordIcon,
  hours,
} from '../../store/index';
import { useStyles, BootstrapInput } from '../Preferences/FormStyles';

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
    <div>
      <Header />
      <div className={classes.buttonContainer}>
        <FormGroup row className={classes.selectRow}>
          <FormControl className={classes.select}>
            <FormHelperText>From</FormHelperText>
            <Select
              labelId=''
              id='demo-simple-select'
              onChange={(e) => handleChange(e)}
              value={state.duration}
              className={classes.dropdown}
              defaultValue=''
              input={<BootstrapInput />}
              required
              name='duration'
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
              defaultValue=''
              value={state.color}
              className={classes.dropdown}
              input={<BootstrapInput />}
              required
              name='color'
              IconComponent={KeyboardArrowDownIcon}
            >
              {hours.map(({ name, hex }) => (
                <MenuItem key={name} value={name}>
                  <ListItemIcon className={classes.icon}>
                    <FiberManualRecordIcon style={{ color: hex }} />
                  </ListItemIcon>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary' disabled={isFormComplete}>
          save & next
        </Button>
      </div>
    </div>
  );
}
