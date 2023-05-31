import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const MyDatePicker = (props) => {
  var size = null
  if (props.class === "small") {
    size = "100%"
  }
  else if (props.class === "large") {
    size = "10rem"
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker sx={{ width: size}} label = {props.label} slotProps={{ textField: { size: props.class } }}/>
    </LocalizationProvider>
  );
}