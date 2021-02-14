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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import OK from './OK';
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
    minWidth: 10,
    paddingRight: 10,
  },
  selectRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  select: {
    padding: 1,
    width: '48%',
    minWidth: 150,
  },
});

export default function Form() {
  const [myState, setMyState] = useState({});
  const classes = useStyles();
  const handleChange = (event) => {
    let myNewState = myState;
    myNewState[event.target.name] = event.target.value;
    setMyState(myNewState);
  };

  function handleSubmit(e) {
    console.log('yeah');
  }
  return (
    <form action='' style={{ padding: '1rem' }} onSubmit={handleSubmit}>
      <FormControl fullWidth={true}>
        <FormHelperText margin='dense'>Meeting name</FormHelperText>
        {/* <FormLabel component='legend'>Meeting name</FormLabel> */}
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
        <FormHelperText margin='dense'>Location</FormHelperText>
        {/* <FormLabel component='legend'>Location</FormLabel> */}
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
      <FormHelperText margin='dense'>
        Is this meeting location on-site?
      </FormHelperText>

      <FormGroup row>
        {/* <FormControlLabel
          control={
            <Checkbox
              checked={myState.checkedB}
              onChange={handleChange}
              name='checkedB'
              color='primary'
            />
          }
          label='No'
        /> */}
        <FormControl component='fieldset'>
          {/* <FormLabel component='legend'>Is this meeting on-site?</FormLabel> */}
          <RadioGroup
            aria-label='on-site'
            name='onSite'
            onChange={handleChange}
            value={myState.onSite}
            row
          >
            <FormControlLabel
              value='true'
              control={<Radio color='primary' />}
              label='Yes'
            />
            <FormControlLabel
              value='false'
              control={<Radio color='primary' />}
              label='No'
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      <FormGroup row className={classes.selectRow}>
        <FormControl className={classes.select}>
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
        <FormControl className={classes.select}>
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
    </form>
  );
}
