import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
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
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '1px solid #595959',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {},
}));

export default function Form() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ padding: '1rem' }}>
      <FormControl className={classes.margin} fullWidth={true}>
        <FormHelperText>
          {/* <InputLabel htmlFor='demo-customized-select-native' required={true}> */}
          Meeting Name
          {/* </InputLabel> */}
        </FormHelperText>

        <Select
          id='demo-customized-select-native'
          value={age}
          onChange={handleChange}
          autoWidth={true}
          input={<BootstrapInput />}
          required={true}
        >
          <MenuItem aria-label='None' value='' />
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin} fullWidth={true}>
        <FormHelperText>Location</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          value={''}
          input={<BootstrapInput />}
          required={true}
        >
          <MenuItem value=''>please select a value</MenuItem>
          <MenuItem>In person meeting</MenuItem>
          <MenuItem>Web conference</MenuItem>
          <MenuItem>Phone call</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin} fullWidth={true}>
        <FormHelperText>Duration</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          value={''}
          input={<BootstrapInput />}
          required={true}
        >
          <MenuItem value=''>please select a value</MenuItem>
          <MenuItem>15 min</MenuItem>
          <MenuItem>30 min</MenuItem>
          <MenuItem>45 min</MenuItem>
          <MenuItem>60 min</MenuItem>
          <MenuItem>90 min</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin} fullWidth={true}>
        <FormHelperText>Meeting Color</FormHelperText>
        <Select
          labelId=''
          id='demo-simple-select'
          onChange={handleChange}
          value={''}
          input={<BootstrapInput />}
          required={true}
        >
          <MenuItem value=''>please select a value</MenuItem>
          <MenuItem>hi</MenuItem>
          <MenuItem>Pink</MenuItem>
          <MenuItem>Purple</MenuItem>
          <MenuItem>Blue</MenuItem>
          <MenuItem>Green</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth={true}>
        <FormHelperText>Description</FormHelperText>

        <TextField
          id='outlined-basic'
          className={classes.margin}
          variant='outlined'
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
