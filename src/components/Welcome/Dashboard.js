import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../counterSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  console.log(useSelector(state => state.counterReducer.value))
  const count = useSelector((state) => state.counter.value);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <Header />
      <DashboardBody />
    </div>
  );
}
