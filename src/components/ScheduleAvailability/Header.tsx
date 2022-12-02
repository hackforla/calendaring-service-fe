import React from 'react';
import { Typography } from '../../utils';
import logo from '../../utils/images/Logo.png';

export default function Header() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <img src={logo} className='logo' alt='logo' />
        <Typography variant='h4' style={{ margin: '2rem 0' }}>
          Schedule Availability
        </Typography>
      </div>
      <Typography
        variant='body1'
        style={{ margin: '0 auto', paddingLeft: '3rem' }}
      >
        What days are you typically available?
      </Typography>
      <Typography
        variant='body1'
        style={{ margin: '0 auto', paddingLeft: '3rem' }}
      >
        Select from below.
      </Typography>
    </div>
  );
}
