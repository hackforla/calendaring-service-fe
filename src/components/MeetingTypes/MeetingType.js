import React from 'react';
import {
  RadioButtonCheckedIcon,
  Card,
  CardContent,
  AddCircleIcon,
  Typography,
} from '../../utils/index';
import { useStyles } from './MeetingTypeStyles';
import { Link } from 'react-router-dom';

export default function MeetingType({ type, updateNeeded }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h4'>{type}</Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h6' className={classes.body}>
            Set your preferences
          </Typography>
          <div style={{ position: 'relative' }}>
            <Link to="/preferences">
              <AddCircleIcon className={classes.icon} color='primary' to="/preferences" component={Link}/>
              {updateNeeded && (
                  <RadioButtonCheckedIcon
                    color='primary'
                    style={{ position: 'absolute', right: '-15px', top: '-5px' }}
                    />
              )}
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
