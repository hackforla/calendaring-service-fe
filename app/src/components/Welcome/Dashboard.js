import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';
import classes from './Dashboard.module.scss';

export default function Dashboard() {
  return (
    <div className={classes.main}>
      <Header />
      <DashboardBody />
    </div>
  );
}
