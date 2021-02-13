import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { formFields } from '../../store/index';
import { Input } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      border: '1px solid #595959',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #595959',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

export default function Form() {
  const [myState, setMyState] = useState({});
  const handleChange = (event) => {
    let myNewState = myState;
    myNewState[event.target.name] = event.target.value;
    console.log(myNewState);
    setMyState(myNewState);
  };

  console.log(formFields);

  return (
    <div style={{ padding: '1rem' }}>
      <FormControl fullWidth={true}>
        <FormHelperText>Meeting name</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          value={myState.meetingName}
          input={<BootstrapInput />}
          name='meetingName'
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth={true}>
        <FormHelperText>Location</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          value={myState.location}
          input={<BootstrapInput />}
          // required={true}
          name='location'
        >
          <MenuItem value='in person meeting'>In person meeting</MenuItem>
          <MenuItem value='web conference'>Web conference</MenuItem>
          <MenuItem value='phone call'>Phone call</MenuItem>
        </Select>
      </FormControl>

      <FormHelperText>Is this meeting location on-site?</FormHelperText>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={myState.checkedA}
              onChange={handleChange}
              name='checkedA'
              color='primary'
            />
          }
          label='Yes'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={myState.checkedB || false}
              onChange={handleChange}
              name='checkedB'
              color='primary'
            />
          }
          label='No'
        />
      </FormGroup>
      <FormGroup row>
        <FormControl fullWidth={true}>
          <FormHelperText>Duration</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            value={myState.duration || ''}
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

          <FormHelperText>Meeting Color</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            value={myState.color || ''}
            input={<BootstrapInput />}
            required={true}
            name='color'
          >
            {formFields[4].inputs.map(({ name, hex }) => (
              <MenuItem key={name} value={name}>
                <ListItemIcon>
                  <FiberManualRecordIcon
                    fontSize='large'
                    style={{ color: `${hex}` }}
                  />
                </ListItemIcon>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FormGroup>
      <FormControl fullWidth={true}>
        <FormHelperText>Description</FormHelperText>
        <TextField
          id='outlined-basic'
          variant='outlined'
          name='description'
          onChange={handleChange}
        />
      </FormControl>

      <div>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary' disabled={true}>
          save & next
        </Button>
      </div>
    </div>
  );
}
