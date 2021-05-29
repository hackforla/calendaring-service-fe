import React from 'react';
import Header from './Header';
import DashboardBody from './DashboardBody';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  setName,
} from '../../counterSlice';

export default function Dashboard() {
  const dispatch = useDispatch();
  const name = useSelector((state) =>  state.data.formData.name);
  
  console.log(name);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(setName('Jonathan'))}>setName</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{name}</p>
      <Header />
      <DashboardBody />
    </div>
  );
}
