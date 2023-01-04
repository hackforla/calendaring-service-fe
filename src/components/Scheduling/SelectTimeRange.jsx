import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  KeyboardArrowDownIcon,
  ListItemIcon,
  CheckRoundedIcon,
} from '../../utils';
import { useStyles } from './SelectTimeRangeStyles';

export default function SelectTimeRange({
  day,
  date,
  availableTimes,
  setAllSelectedTimes,
  allSelectedTimes,
}) {
  const {
    timeRange,
    subHeader,
    inputLabelRoot,
    inputOutlined,
    selectRoot,
    selectIcon,
    selectOutlined,
    menuList,
    menuItemRoot,
    selectIconOutlined,
    listItemIconRoot,
    checkmarkIcon,
    checkmarkRoot,
  } = useStyles();
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

  const keyDownHandler = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      handleChange();
    }
  };

  return (
    <div className={timeRange}>
      <div>
        <div className={subHeader}>
          <Typography variant='h6'>{day}</Typography>
          <Typography
            variant='subtitle2'
            style={{
              fontWeight: 400,
            }}
          >
            {date}
          </Typography>
        </div>
        <Typography
          variant='subtitle2'
          color='secondary'
          style={{
            fontWeight: 400,
            marginTop: '0.5rem',
          }}
        >
          Select Times
        </Typography>
      </div>
      <FormControl variant='outlined'>
        <InputLabel
          classes={{
            root: inputLabelRoot,
            outlined: inputOutlined,
          }}
          id='demo-simple-select-outlined-label'
          disableAnimation={true}
          shrink={false}
        >
          {times.length > 0 ? '' : 'Select Times'}
        </InputLabel>

        <Select
          classes={{
            root: selectRoot,
            icon: selectIcon,
            outlined: selectOutlined,
            iconOutlined: selectIconOutlined,
          }}
          inputProps={{
            name: 'times',
          }}
          MenuProps={{
            MenuListProps: {
              classes: {
                root: menuList,
              },
            },
          }}
          IconComponent={KeyboardArrowDownIcon}
          multiple={true}
          value={times}
          onChange={handleChange}
          onKeyDown={keyDownHandler}
          renderValue={(selected) => selected.join(', ')}
        >
          {availableTimes.map((time, index) => (
            <MenuItem
              classes={{
                root: menuItemRoot,
              }}
              key={index}
              value={time}
            >
              {time}
              {times.includes(time) && (
                <ListItemIcon
                  classes={{
                    root: listItemIconRoot,
                  }}
                >
                  <CheckRoundedIcon
                    classes={{
                      root: checkmarkRoot,
                      fontSizeInherit: checkmarkIcon,
                    }}
                    fontSize='inherit'
                  />
                </ListItemIcon>
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
