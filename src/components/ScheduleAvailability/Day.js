import React from 'react';
import { Checkbox } from '../../utils/index';

export default function Day({ day, selected, dispatch, idx }) {
  return (
    <div
      style={{
        border: '1px solid black',
        borderRadius: '.5rem',
        margin: '1rem 3rem',
        padding: '.25rem .5rem',
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={() => dispatch({ type: 'TOGGLE_SELECTED', payload: idx })}
    >
      <Checkbox
        readOnly
        checked={selected}
        color='primary'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p>{day}</p>
    </div>
  );
}
