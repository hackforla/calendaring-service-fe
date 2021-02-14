import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { FiberManualRecordIcon } from '../../store/index';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { formFields } from '../../store/index';
import { TextareaAutosize } from '@material-ui/core';

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
    display: 'flex',
    alignItems: 'center',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
  },
}))(InputBase);

const useStyles = makeStyles({
  root: {
    border: '1px solid #595959',
    borderRadius: '4px',
    fontSize: '14px',
  },
  icon: {
    minWidth: 0,
    paddingRight: 10,
  },
});

export default function Form() {
  const [myState, setMyState] = useState({});
  const classes = useStyles();
  const handleChange = (event) => {
    let myNewState = myState;
    myNewState[event.target.name] = event.target.value;
    console.log(myNewState);
    setMyState(myNewState);
  };
  return (
    <div style={{ padding: '1rem' }}>
      <FormControl fullWidth={true}>
        <FormHelperText>Meeting name</FormHelperText>
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
      <FormControl fullWidth={true}>
        <FormHelperText>Location</FormHelperText>
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
              checked={myState.checkedB}
              onChange={handleChange}
              name='checkedB'
              color='primary'
            />
          }
          label='No'
        />
      </FormGroup>
      <FormGroup row >
        <FormControl>
          <FormHelperText>Duration</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            value={myState.duration}
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
        <FormControl>
          <FormHelperText>Meeting Color</FormHelperText>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={handleChange}
            defaultValue=''
            value={myState.color}
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

      <div>
        <Button size='large'>cancel</Button>
        <Button size='large' color='primary' disabled={true}>
          save & next
        </Button>
      </div>
    </div>
  );
}
