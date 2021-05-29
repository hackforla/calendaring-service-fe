import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setPreference } from '../../userSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { meetingPreference, user } = useSelector((state) => state.thing);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => dispatch(setName('Jonathan'))}>set name</button>
      <button onClick={() => dispatch(setPreference('Remote'))}>
        set preference
      </button>
      <p>{user.name}</p>
      <p>{meetingPreference || ''}</p>
      <Header />
      <DashboardBody />
    </div>
  );
}
