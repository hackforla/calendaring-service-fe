import React from 'react';
import { logo, Typography } from '../../store/index';

export default function Header() {
  return (
    <>
      <div className='row align-center justify-center'>
        <img src={logo.default} className='logo' alt='logo' />
        <Typography variant='h5'>Meeting Preferences</Typography>
      </div>
      <Typography variant='subtitle1' className='p1'>
        Set your preferences for this meeting type using the options below
      </Typography>
    </>
  );
}
