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
} from '../../store/index';
import { useStyles, BootstrapInput } from './FormStyles';

export default function Form() {
  const [meetingName, setMeetingName] = useState('');
  const [location, setLocation] = useState('');
  const [onSite, setonSite] = useState(false);
  const [duration, setDuration] = useState('');
  const [color, setColor] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const classes = useStyles();
  let values = {
    meetingName,
    location,
    onSite,
    duration,
    color,
    description,
  };
  let isFormComplete = Object.values(values).every((item) => item !== '');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }

  return (
    <form action='submit' style={{ padding: '1rem' }} onSubmit={handleSubmit}>
      {/* MEETING NAME BEGIN */}
      <FormControl fullWidth={true}>
        <FormHelperText margin='dense'>Meeting name</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={(e) => setMeetingName(e.target.value)}
          defaultValue=''
          value={meetingName}
          input={<BootstrapInput />}
          name='meetingName'
          IconComponent={KeyboardArrowDownIcon}
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
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          input={<BootstrapInput />}
          name='location'
          IconComponent={KeyboardArrowDownIcon}
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
      <div className='row space-between mt1'>
        <FormHelperText margin='dense'>
          Is this meeting location on-site?
        </FormHelperText>
        <HelpIcon color='primary' />
      </div>
      <FormGroup row>
        <FormControl component='fieldset'>
          <RadioGroup
            aria-label='on-site'
            name='onSite'
            onChange={(e) => setonSite(e.target.value)}
            row
          >
            <FormControlLabel
              value={true}
              control={
                <Radio
                  color='primary'
                  value={true}
                  checked={onSite === 'true'}
                />
              }
              label='Yes'
            />
            <FormControlLabel
              value={false}
              control={<Radio color='primary' checked={onSite === 'false'} />}
              label='No'
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      {/* ONSITE RADIO END */}

      {/* ONSITE LOCATION BEGIN */}
      {onSite === 'true' && (
        <FormControl fullWidth={true}>
          <FormHelperText margin='dense'>On-site Location</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => setPlace(e.target.value)}
            defaultValue=''
            value={place}
            input={<BootstrapInput />}
            name='place'
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value='PSY Main Office'>PSY Main Office</MenuItem>
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
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            className={classes.dropdown}
            defaultValue=''
            input={<BootstrapInput />}
            required={true}
            name='duration'
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
            labelId=''
            id='demo-simple-select'
            onChange={(e) => setColor(e.target.value)}
            defaultValue=''
            value={color}
            className={classes.dropdown}
            input={<BootstrapInput />}
            required={true}
            name='color'
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
          autoComplete='off'
          id='outlined-basic'
          rows={7}
          defaultValue=''
          variant='outlined'
          name='description'
          onChange={(e) => setDescription(e.target.value)}
          className={classes.root}
          style={{ border: '1px solid black', padding: '10px' }}
        />
      </FormControl>
      {/* DESCRIPTION END */}

      {/* SUBMIT BEGIN */}
      <div>
        <Button size='large'>cancel</Button>
        <Button
          size='large'
          type='submit'
          color='primary'
          disabled={!isFormComplete}
        >
          save & next
        </Button>
      </div>
      {/* SUBMIT END */}
    </form>
  );
}
