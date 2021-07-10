import React from 'react';
import { Button, Typography } from '../../utils/index';
import { useStyles } from './SuccessStyles';
import GreenCheckmark from './GreenCheckmark';

export default function HostSuccess() {
  const { root, success, paragraph, buttonContainer, dashboardButton } =
    useStyles();

  return (
    <div className={root}>
      <GreenCheckmark />
      <Typography variant='h5' className={success}>
        Success!
      </Typography>
      <Typography variant='body2' className={paragraph}>
        Thank you for identifying your preferred days/times. The guest will be
        alerted to select their days.
      </Typography>
      <Typography variant='body2' className={paragraph}>
        As soon as we have a match, we will send you confirmation.
      </Typography>
      <Typography variant='body2' className={paragraph}>
        Should no match be found, then we will let you know what the
        guest&apos;s preferred days and times are.
      </Typography>
      <div className={buttonContainer}>
        <Button size='large' color='primary'>
          <span className={dashboardButton}>Back to Dashboard</span>
        </Button>
      </div>
    </div>
  );
}
