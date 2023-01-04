import React from 'react';
import { Typography, Stack } from '@mui/material';
import logo from '../../utils/images/Logo.png';

export default function Header() {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Stack
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <img src={logo} className='logo' alt='logo' />
        <Typography variant='h4'>Schedule Availability</Typography>
      </Stack>
      <Typography variant='body1'>
        What days are you typically available?
      </Typography>
      <Typography sx={{ marginBottom: 1 }} variant='body1'>
        Select from below.
      </Typography>
    </Stack>
  );
}
