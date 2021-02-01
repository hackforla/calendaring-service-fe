import React from 'react';
import Stepper from '../Success/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Welcome/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { meetingTypes } from '../../store/index';
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

export default function MeetingTypes() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Stepper />
      {meetingTypes.map((type, i) => (
        <Card key={i} className={classes.root} variant='outlined'>
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
              <div>
                <AddCircleIcon className={classes.icon} style={{height: '48px', width: '48px'}} />
                <RadioButtonCheckedIcon className={classes.icon} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
