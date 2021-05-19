import React from 'react';
import {
  RadioButtonCheckedIcon,
  Card,
  CardContent,
  AddCircleIcon,
  Typography,
} from '../../utils/index';
import { useStyles } from './MeetingTypeStyles';

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
            <AddCircleIcon className={classes.icon} color='primary' />
            {updateNeeded && (
              <RadioButtonCheckedIcon
                color='primary'
                style={{ position: 'absolute', right: '-15px', top: '-5px' }}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
