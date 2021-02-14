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
} from '../../store/index';
import { useStyles, BootstrapInput } from './FormStyles';

const initialValues = {
  meetingName: '',
  location: '',
  onSite: false,
  duration: '',
  color: '',
  description: '',
};

export default function Form() {
  const [myState, setMyState] = useState(initialValues);
  const classes = useStyles();

  function handleChange(event) {
    initialValues[event.target.name] = event.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(myState);
  }

  console.log(myState);
  return (
    <form action='submit' style={{ padding: '1rem' }} onSubmit={handleSubmit}>
      {/* MEETING NAME BEGIN */}
      <FormControl fullWidth={true}>
        <FormHelperText margin='dense'>Meeting name</FormHelperText>

        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          defaultValue=''
          value={myState.meetingName}
          input={<BootstrapInput />}
          name='meetingName'
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
        <FormHelperText margin='dense'>Location</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          defaultValue=''
          onChange={handleChange}
          value={myState.location}
          input={<BootstrapInput />}
          name='location'
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
      <FormHelperText margin='dense'>
        Is this meeting location on-site?
      </FormHelperText>
      <FormGroup row>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='on-site'
            name='onSite'
            onChange={handleChange}
            value={myState.onSite}
            row
          >
            <FormControlLabel
              value={true}
              control={<Radio color='primary' />}
              label='Yes'
            />
            <FormControlLabel
              value={false}
              control={<Radio color='primary' />}
              label='No'
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      {/* ONSITE RADIO END */}

      {/* ONSITE LOCATION BEGIN */}
      {myState.onSite && (
        <FormControl fullWidth={true}>
          <FormHelperText margin='dense'>Meeting name</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            defaultValue=''
            value={myState.meetingName}
            input={<BootstrapInput />}
            name='meetingName'
          >
            {formFields[0].inputs.map(({ type }) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {/* ONSITE LOCATION END */}

      {/* DURATION AND COLORS BEGIN */}
      <FormGroup row className={classes.selectRow}>
        <FormControl className={classes.select}>
          <FormHelperText>Duration</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            value={myState.duration}
            className={classes.dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required={true}
            name='duration'
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
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            defaultValue=''
            value={myState.color}
            className={classes.dropdown}
            input={<BootstrapInput />}
            required={true}
            name='color'
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
          autoComplete='off'
          id='outlined-basic'
          rows={7}
          defaultValue=''
          variant='outlined'
          name='description'
          onChange={handleChange}
          className={classes.root}
          style={{ border: '1px solid black', padding: '10px' }}
        />
      </FormControl>
      {/* DESCRIPTION END */}

      {/* SUBMIT BEGIN */}
      <div>
        <Button size='large'>cancel</Button>
        <Button size='large' type='submit' color='primary' disabled={false}>
          save & next
        </Button>
      </div>
      {/* SUBMIT END */}
    </form>
  );
}
