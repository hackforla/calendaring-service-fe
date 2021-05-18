import React from 'react';
import { Button, Typography } from '../../utils/index';
import { useStyles } from './SuccessStyles';
import GreenCheckmark from './GreenCheckmark';

export default function GuestSuccess() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GreenCheckmark />
      <Typography variant="h5" className={classes.success}>
        Success!
      </Typography>
      <Typography variant="body2" className={classes.paragraph}>
        Thanks for your submission.
      </Typography>
      <Typography variant="body2" className={classes.paragraph}>
        Your selected times will be reviewed by your case worker.
      </Typography>
      <Typography variant="body2" className={classes.paragraph}>
        You will receive a confirmation email shortly.
      </Typography>
      <Typography variant="body2" className={classes.paragraph}>
        Check your dashboard for updates and follow up.
      </Typography>
      <div className={classes.buttonContainer}>
        <Button size="large" color="primary">
          <span className={classes.dashboardButton}>Back to Dashboard</span>
        </Button>
      </div>
    </div>
  );
}
