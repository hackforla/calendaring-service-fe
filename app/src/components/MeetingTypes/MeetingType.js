import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { RadioButtonCheckedIcon } from '../../store/index';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderTop: '15px solid #3D8EFF',
    margin: '1rem',
    padding: '1rem'
  },
  title: {
    fontSize: 24,
    margin: '0',
    fontWeight: '700',
  },
  body: {
    margin: '0',
    color: '#249BE5',
  },
  icon: {
    height: '48px',
    width: '48px',
  },
});

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
