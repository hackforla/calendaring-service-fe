import React from 'react';
import { Button, Typography } from '../../utils/index';
import { useStyles } from './SuccessStyles';
import GreenCheckmark from './GreenCheckmark';

export default function GuestSuccess() {
  const { success, paragraph, buttonContainer, dashboardButton, root } =
    useStyles();

  return (
    <div className={root}>
      <GreenCheckmark />
      <Typography variant='h5' className={success}>
        Success!
      </Typography>
      <Typography variant='body2' className={paragraph}>
        Thanks for your submission.
      </Typography>
      <Typography variant='body2' className={paragraph}>
        Your selected times will be reviewed by your case worker.
      </Typography>
      <Typography variant='body2' className={paragraph}>
        You will receive a confirmation email shortly.
      </Typography>
      <Typography variant='body2' className={paragraph}>
        Check your dashboard for updates and follow up.
      </Typography>
      <div className={buttonContainer}>
        <Button size='large' color='primary'>
          <span className={dashboardButton}>Back to Dashboard</span>
        </Button>
      </div>
    </div>
  );
}
