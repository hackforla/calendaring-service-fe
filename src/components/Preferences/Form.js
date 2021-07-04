import React, { useState } from 'react';
import {
  FiberManualRecordIcon,
  formFields,
  Button,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  ListItemIcon,
  Radio,
  RadioGroup,
  FormHelperText,
  Select,
  TextareaAutosize,
  HelpIcon,
  KeyboardArrowDownIcon,
} from '../../utils/index';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles, BootstrapInput } from './FormStyles';
import { setPreferences } from '../../utils/redux/userSlice';

import { Link } from 'react-router-dom';

let initialValues = {
  meetingName: '',
  location: '',
  onSite: '',
  duration: '',
  color: '',
  description: '',
};

export default function Form() {
  const [state, setState] = useState(initialValues);
  const classes = useStyles();
  let isFormComplete = Object.values(state).every((item) => item !== '');
  const { meetingPreferences } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  
  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setPreferences(state));
  }
  console.log(meetingPreferences);

  return (
    <form action="submit" style={{ padding: '1rem' }} onSubmit={handleSubmit}>
      {/* MEETING NAME BEGIN */}
      <FormControl fullWidth={true}>
        <FormHelperText margin="dense">Meeting name</FormHelperText>
        <Select
          labelId=""
          id="demo-simple-select"
          onChange={(e) => handleChange(e)}
          defaultValue=""
          value={state.meetingName}
          input={<BootstrapInput />}
          name="meetingName"
          IconComponent={KeyboardArrowDownIcon}
          required
        >
          {formFields[0].inputs.map(({ type }) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* MEETING NAME END */}

      {/* LOCATION BEGIN */}
      <FormControl fullWidth={true}>
        <FormHelperText margin="dense">Location</FormHelperText>
        <Select
          labelId=""
          id="demo-simple-select"
          defaultValue=""
          onChange={(e) => handleChange(e)}
          value={state.location}
          input={<BootstrapInput />}
          name="location"
          IconComponent={KeyboardArrowDownIcon}
          required
        >
          {formFields[1].inputs.map(({ name, icon }) => (
            <MenuItem key={name} value={name}>
              <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* LOCATION END */}

      {/* ONSITE RADIO BEGIN */}
      <div className="row space-between mt1">
        <FormHelperText margin="dense">
          Is this meeting location on-site?
        </FormHelperText>
        <HelpIcon color="primary" />
      </div>
      <FormGroup row>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="on-site"
            name="onSite"
            onChange={(e) => handleChange(e)}
            row
            required
          >
            <FormControlLabel
              value={true}
              control={
                <Radio
                  color="primary"
                  value={true}
                  checked={state.onSite === 'true'}
                />
              }
              label="Yes"
            />
            <FormControlLabel
              value={false}
              control={
                <Radio color="primary" checked={state.onSite === 'false'} />
              }
              label="No"
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      {/* ONSITE RADIO END */}

      {/* ONSITE LOCATION BEGIN */}
      {state.onSite === 'true' && (
        <FormControl fullWidth={true}>
          <FormHelperText margin="dense">On-site Location</FormHelperText>
          <Select
            labelId=""
            id="demo-simple-select"
            onChange={(e) => handleChange(e)}
            defaultValue=""
            value={state.place}
            input={<BootstrapInput />}
            name="place"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="PSY Main Office">PSY Main Office</MenuItem>
          </Select>
        </FormControl>
      )}
      {/* ONSITE LOCATION END */}

      {/* DURATION AND COLORS BEGIN */}
      <FormGroup row className={classes.selectRow}>
        <FormControl className={classes.select}>
          <FormHelperText>Duration</FormHelperText>
          <Select
            labelId=""
            id="demo-simple-select"
            onChange={(e) => handleChange(e)}
            value={state.duration}
            className={classes.dropdown}
            defaultValue=""
            input={<BootstrapInput />}
            required
            name="duration"
            IconComponent={KeyboardArrowDownIcon}
          >
            {formFields[3].inputs.map((input) => (
              <MenuItem key={input} value={input}>
                {input} min
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.select}>
          <FormHelperText>Meeting Color</FormHelperText>
          <Select
            labelId=""
            id="demo-simple-select"
            onChange={(e) => handleChange(e)}
            defaultValue=""
            value={state.color}
            className={classes.dropdown}
            input={<BootstrapInput />}
            required
            name="color"
            IconComponent={KeyboardArrowDownIcon}
          >
            {formFields[4].inputs.map(({ name, hex }) => (
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
      {/* DURATION AND COLORS END */}

      {/* DESCRIPTION BEGIN */}
      <FormControl fullWidth={true}>
        <FormHelperText>Description</FormHelperText>
        <TextareaAutosize
          input={<BootstrapInput />}
          autoComplete="off"
          id="outlined-basic"
          rows={7}
          defaultValue=""
          variant="outlined"
          name="description"
          onChange={(e) => handleChange(e)}
          className={classes.root}
          style={{ border: '1px solid black', padding: '10px' }}
          required
        />
      </FormControl>
      {/* DESCRIPTION END */}

      {/* SUBMIT BEGIN */}
      <div>
        <Button size='large' component={Link} to="/meetingtypes">
          cancel
        </Button>
        <Button
          size="large"
          type="submit"
          color="primary"
          disabled={!isFormComplete}
        >
          save & next
        </Button>
      </div>
      {/* SUBMIT END */}
    </form>
  );
}
