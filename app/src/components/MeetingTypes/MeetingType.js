import React from 'react';
import { RadioButtonCheckedIcon, Card, CardContent, AddCircleIcon } from '../../store/index';
import { useStyles } from './MeetingTypeStyles'

export default function MeetingType({ type, updateNeeded }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <h4 className={classes.title} color='textSecondary'>
          {type}
        </h4>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h6 className={classes.body}>Set your preferences</h6>
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
