import React from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import classes from './DashboardBody.module.scss';
import { welcome, Button, Typography } from '../../utils/index';
import ScheduleAvailability from '../ScheduleAvailability/ScheduleAvailability';

export default function DashboardBody() {
  return (
    <>
      <Typography variant='h5' style={{ margin: '1rem' }}>
        Welcome
      </Typography>
      <img
        src={welcome.default}
        alt='welcome'
        style={{ width: '90%', margin: '1rem auto' }}
      />
      <Typography variant='body1' className='body-text'>
        This onboarding guide will show you how to add your availability, and
        customize your meeting types.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button variant='contained' color='primary'>
        <Link to="/scheduledays">let&apos;s get started</Link>
        </Button>
      </div>
      <Switch>
          <Route path="/scheduledays">
            <ScheduleAvailability />
          </Route>
      </Switch>
    </>
  );
}
