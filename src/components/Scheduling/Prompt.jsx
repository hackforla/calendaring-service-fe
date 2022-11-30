import React from 'react';
import { Typography, Button } from '../../utils/index';
import { useStyles } from './PromptStyles';
import logo from '../../utils/images/Logo.png';

// TODO : Make Line 18, 26, 36 dynamic
export default function Prompt() {
  const { root, img } = useStyles();
  return (
    <div className={root}>
      <img src={logo} className={img} alt='logo' />
      <Typography
        variant='h4'
        color='primary'
        style={{
          marginTop: '1rem',
          marginBottom: '0.5rem',
        }}
      >
        Training
      </Typography>
      <Typography
        variant='body1'
        style={{
          fontWeight: '500',
          marginBottom: '1rem',
        }}
      >
        with Tracy
      </Typography>
      <Typography
        variant='body1'
        style={{
          fontSize: '16px',
          margin: '1rem 0',
          lineHeight: '32px',
          letterSpacing: '1px',
        }}
      >
        Meet with your case worker and complete the required training session.
      </Typography>

      <Typography
        variant='h4'
        color='primary'
        style={{
          margin: '1rem',
        }}
      >
        Duration: 60 min
      </Typography>

      <Button
        size='large'
        variant='contained'
        color='primary'
        style={{
          textTransform: 'none',
          margin: '1rem',
        }}
      >
        Schedule
      </Button>
    </div>
  );
}
