import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  KeyboardArrowDownIcon,
} from '../../utils/index';
import { useStyles } from './SelectTimeRangeStyles';
// import MuiMenuItem from './MuiMenuItem';

export default function SelectTimeRange({
  day,
  date,
  availableTimes,
  setAllSelectedTimes,
  allSelectedTimes,
}) {
  const classes = useStyles();
  const [times, setTimes] = useState([]);

  //Validation check to handle if user selects more than 2 times.
  const handleChange = (event) => {
    if (event.target.value.length <= 2) {
      setTimes(event.target.value);
      setAllSelectedTimes({
        ...allSelectedTimes,
        [date]: { selectedTimes: event.target.value },
      });
    }
  };

  return (
    <div className={classes.timeRange}>
      <div>
        <div className={classes.subHeader}>
          <Typography variant="h6">{day}</Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: 400,
            }}
          >
            {date}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          color="secondary"
          style={{
            fontWeight: 400,
            marginTop: '0.5rem',
          }}
        >
          Select Times
        </Typography>
      </div>
      <FormControl variant="outlined">
        <InputLabel
          classes={{
            root: classes.inputLabelRoot,
            outlined: classes.inputOutlined,
          }}
          id="demo-simple-select-outlined-label"
          disableAnimation={true}
          shrink={false}
        >
          {times.length > 0 ? '' : 'Select Times'}
        </InputLabel>

        <Select
          classes={{
            root: classes.selectRoot,
            icon: classes.selectIcon,
            outlined: classes.selectOutlined,
            iconOutlined: classes.selectIconOutlined,
          }}
          inputProps={{
            name: 'times',
          }}
          MenuProps={{
            MenuListProps: {
              classes: {
                root: classes.menuList,
              },
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
          multiple={true}
          value={times}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {availableTimes.map((time, index) => {
            return (
              // The MuiMenuItem allows me to have its own state which gives me the ability to show the Checkmark.

              // But for some reason by doing this approach, the onChange on the Select Material UI won't trigger and therefore, I would not get my times date stored.

              //I then tried to pass the handleChange to the my MuiMenuItem component but it seems that the event.target.value is not the same at when the select's event.target.value come out to be. Select's event.target.value is an ['1pm-2pm', '2pm-3pm'], while the MuiMenuItem's event.target.value comes out to be a numeric value.

              //You can uncomment MuiMenuItem and the following lines needed and comment out MenuItem to see the checkmark functionality in action.

              // <MuiMenuItem
              //   key={index}
              //   time={time}
              //   handleChange={handleChange}
              // />

              //This MenuItem allows me to select times and get the times stored into the times state.
              <MenuItem
                classes={{
                  root: classes.menuItemRoot,
                }}
                key={index}
                value={time}
              >
                {time}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
