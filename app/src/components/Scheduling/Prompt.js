import React from 'react';
import { logo, Typography } from '../../store/index';
import { useStyles } from './PromptStyles';

export default function Prompt() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={logo.default} className={classes.img} alt='logo' />
      <div>
        <Typography variant='h4' color='primary'>
          Training
        </Typography>
        <Typography variant='body1'>with Tracy</Typography>
      </div>
    </div>
  );
}
