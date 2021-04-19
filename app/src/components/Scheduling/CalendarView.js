import { React, useState } from 'react';
import { Paper, Button } from '@material-ui/core';
import { useStaticState, Calendar } from '@material-ui/pickers';

export default function CalendarView() {
  const [value, handleDateChange] = useState(new Date());

  // you can past mostly all available props, like minDate, maxDate, autoOk and so on
  const { pickerProps, wrapperProps } = useStaticState({
    value,
    onChange: handleDateChange,
  });

  return (
    <div>
      <Paper style={{ overflow: 'hidden' }}>
        <Calendar {...pickerProps} />
      </Paper>
    </div>
  );
}
