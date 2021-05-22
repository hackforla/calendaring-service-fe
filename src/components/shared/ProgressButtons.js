import React from 'react';
import { Button } from '../../utils/index';

export default function ProgressButtons({
  firstBtnText,
  secondBtnText,
  disabled,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: '10px',
      }}
    >
      <Button
        style={{
          textTransform: 'none',
          fontSize: '16px',
        }}
        size="large"
      >
        {firstBtnText}
      </Button>
      <Button
        style={{
          textTransform: 'none',
          fontSize: '16px',
        }}
        size="large"
        color="primary"
        disabled={disabled}
      >
        {secondBtnText}
      </Button>
    </div>
  );
}
