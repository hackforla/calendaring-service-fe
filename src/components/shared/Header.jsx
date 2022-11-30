import React from 'react';
import { Typography } from '../../utils/';
import logo from '../../utils/images/Logo.png';

export default function Header({ title, subtitle }) {
  return (
    <>
      <div className='row align-center justify-center'>
        <img src={logo} className='logo' alt='logo' />
        <Typography variant='h5'>{title}</Typography>
      </div>
      <Typography variant='subtitle1' className='p1'>
        {subtitle}
      </Typography>
    </>
  );
}
