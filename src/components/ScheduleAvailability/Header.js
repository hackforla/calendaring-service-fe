import React from 'react';
import { main, top } from './Header.module.scss';
import { logo, Typography } from '../../utils/index';

export default function Header() {
  return (
    <div className={main}>
      <div className={top}>
        <img src={logo.default} className="logo" alt="logo" />
        <Typography variant="h4">Schedule Availability</Typography>
      </div>
      <Typography variant="body1">
        What days are you typically available?
      </Typography>
      <Typography variant="body1">Select from below.</Typography>
    </div>
  );
}
