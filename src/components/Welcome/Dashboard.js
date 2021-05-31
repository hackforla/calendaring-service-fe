import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../userSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.thing);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => dispatch(setName('Jonathan'))}>set name</button>
      <p>{user.name}</p>
      <Header />
      <DashboardBody />
    </div>
  );
}
