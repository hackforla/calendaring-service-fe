import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderTop: '15px solid #3D8EFF',
    margin: '1rem',
  },
  title: {
    fontSize: 24,
    margin: '1rem 0 .5rem',
    fontWeight: '700',
  },
  body: {
    margin: '0',
    color: '#249BE5',
  },
  icon: {
    color: '#249be5',
  },
});

export default function MeetingType({ type }) {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <h4 className={classes.title} color='textSecondary' gutterBottom>
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
            <AddCircleIcon
              className={classes.icon}
              style={{ height: '48px', width: '48px' }}
            />
            <RadioButtonCheckedIcon
              className={classes.icon}
              style={{ position: 'absolute', right: '-16px' }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
