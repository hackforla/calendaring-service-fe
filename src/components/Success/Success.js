import React from 'react';
import Stepper from './Stepper';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, Button, Typography } from '../../utils';

export default function Success() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
      }}
    >
      <CheckCircleIcon
        color="primary"
        style={{ height: '5rem', width: '5rem' }}
      />
      <Typography style={{ margin: '1rem' }} variant="h5">
        Success!
      </Typography>
      <Stepper />
      <Typography variant="body1" className="body-text">
        Thanks for setting up your availability! We will use this information
        when you customize your meeting types. Visit your Dashboard and
        personalize your meeting types to complete calendar set up.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/meetingtypes"
      >
        complete setup
      </Button>
    </div>
  );
}
