import React from 'react';
import classes from './SuccessScreenTwo.module.scss';
import MeetingTypes from '../MeetingTypes/MeetingTypes';
import { Button } from '../../utils/index';
import { CheckCircleOutlineIcon, Typography } from '../../utils/index';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function SuccessScreenTwo() {
  return (
    <>
    <div className={classes.main}>
      <CheckCircleOutlineIcon style={{ height: '5rem', width: '5rem' }} />
      <div className={classes.SuccessScreenTwoHeading}>
        <Typography variant='h5'>Success!</Typography>
      </div>
      <div className={classes.SuccessScreenTwoText}>
        <Typography className='body-text'>
          Your meeting preferences for TRAINING have been set. Please continue
          set up and manage your preferences by visisting your dashboard.
        </Typography>
      </div>
      <div className={classes.SuccessScreenTwoButton}>
      <Link to="/meetingtypes">
        <Button variant='contained' color='primary'>
          Complete Setup
        </Button>
      </Link>
      </div>
    </div>
    <Switch>
          <Route path="/meetingtypes">
            <MeetingTypes />
          </Route>
    </Switch>
    </>
  );
}
