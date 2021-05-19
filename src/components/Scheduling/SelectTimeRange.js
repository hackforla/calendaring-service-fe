import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Select,
  MenuItem,
  ListItemIcon,
  InputLabel,
  KeyboardArrowDownIcon,
  CheckRoundedIcon,
} from '../../store/index';
import { useStyles } from './SelectTimeRangeStyles';

export default function SelectTimeRange({
  day,
  date,
  availableTimes,
  setAllSelectedTimes,
  allSelectedTimes,
}) {
  const classes = useStyles();
  const [times, setTimes] = useState([]);
  const [showIcon, setShowIcon] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length <= 2) {
      setTimes(event.target.value);
      setAllSelectedTimes({
        ...allSelectedTimes,
        [date]: { selectedTimes: event.target.value },
      });
    }
  };

  const handleCheckmarkIcon = () => {
    if (showIcon) {
      return (
        <ListItemIcon
          classes={{
            root: classes.listItemIconRoot,
          }}
        >
          <CheckRoundedIcon
            classes={{
              root: classes.checkmarkRoot,
              fontSizeInherit: classes.checkmarkIcon,
            }}
            fontSize="inherit"
          />
        </ListItemIcon>
      );
    }
  };

  // TODO: also when selected add a checkmark on the right
  //create a seperate component for the menu item so it can have its own state to toggle the icon

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
              <MenuItem
                classes={{
                  root: classes.menuItemRoot,
                }}
                key={index}
                value={time}
              >
                {time}
                {handleCheckmarkIcon()}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
