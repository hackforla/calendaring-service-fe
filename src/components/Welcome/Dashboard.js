import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Header />
      <DashboardBody />
    </div>
  );
}
