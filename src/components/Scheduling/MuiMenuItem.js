import React, { useState } from 'react';
import { MenuItem, ListItemIcon, CheckRoundedIcon } from '../../utils/index';
import { useStyles } from './SelectTimeRangeStyles';

const MuiMenuItem = React.forwardRef(({ time, handleChange }, ref) => {
  const classes = useStyles();
  const [showIcon, setShowIcon] = useState(false);

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

  return (
    <MenuItem
      ref={ref}
      classes={{
        root: classes.menuItemRoot,
      }}
      onClick={(e) => {
        {
          setShowIcon(!showIcon);
          handleChange(e);
        }
      }}
      value={time}
    >
      {time} {handleCheckmarkIcon()}
    </MenuItem>
  );
});

MuiMenuItem.displayName = 'MuiMenuItem';
export default MuiMenuItem;
