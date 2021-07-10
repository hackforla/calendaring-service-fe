import React from 'react';
import { useStyles } from './SuccessScreenTwoStyles';
import { Button } from '../../utils';
import { CheckCircleOutlineIcon, Typography } from '../../utils';
import { Link } from 'react-router-dom';

export default function SuccessScreenTwo() {
  const { main } = useStyles();
  return (
    <div className={main}>
      <CheckCircleOutlineIcon style={{ height: '5rem', width: '5rem' }} />
      <Typography
        variant='h5'
        style={{ fontWeight: 'bold', marginBottom: '.5rem' }}
      >
        Success!
      </Typography>
      <Typography className='body-text'>
        Your meeting preferences for TRAINING have been set. Please continue set
        up and manage your preferences by visiting your dashboard.
      </Typography>
      <div>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/meetingtypes'
        >
          Complete Setup
        </Button>
      </div>
    </div>
  );
}
