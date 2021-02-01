import React from 'react'

export default function ForDevsOnly({step, stepChanger}) {
    return (

                  <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px dashed blue',
        }}
      >
        <button disabled={step === 0} onClick={() => stepChanger('decrement')}>
          -
        </button>
        <button disabled={step === 5} onClick={() => stepChanger('increment')}>
          +
        </button>
        <p style={{ fontSize: '14px' }}>
          {' '}
          ⬅ buttons for devs to test progress bar
        </p>
      </div>

    )
}
