import React from 'react';
import { logo } from '../../store/index';

export default function Header() {
  return (
    <div className=''>
      <div className='row align-center justify-center'>
        <img src={logo.default} className='logo' alt='logo' />
        <h5>Meeting Preferences</h5>
      </div>
      <p className='body2'>
        Set your preferences for this meeting type using the options below
      </p>
    </div>
  );
}
