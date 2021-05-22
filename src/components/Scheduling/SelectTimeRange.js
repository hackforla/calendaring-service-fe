import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Select,
  InputLabel,
  // MenuItem,
  KeyboardArrowDownIcon,
} from '../../utils/index';
import { useStyles } from './SelectTimeRangeStyles';
import MuiMenuItem from './MuiMenuItem';

export default function SelectTimeRange({
  day,
  date,
  availableTimes,
  setAllSelectedTimes,
  allSelectedTimes,
}) {
  const classes = useStyles();
  const [times, setTimes] = useState([]);

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
              <MuiMenuItem
                key={index}
                time={time}
                handleChange={handleChange}
              />
              // <MenuItem
              //   classes={{
              //     root: classes.menuItemRoot,
              //   }}
              //   key={index}
              //   value={time}
              // >
              //   {time}
              // </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
