import React from 'react';
import logo from '../store/images/Logo.png';
import classes from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <img src={logo} alt='' />
    </div>
  );
}
