import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '../../utils';
import Welcome from '../../utils/images/Welcome.png';

export default function DashboardBody() {
  return (
    <>
      <Typography
        variant='h4'
        style={{ margin: '1rem auto', textAlign: 'center' }}
      >
        Welcome
      </Typography>
      <img
        src={Welcome}
        alt='welcome'
        style={{ width: '90%', margin: '1rem auto' }}
      />
      <Typography variant='body1' className='body-text'>
        This onboarding guide will show you how to add your availability, and
        customize your meeting types.
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/scheduledays'
        >
          let&apos;s get started
        </Button>
      </div>
    </>
  );
}
