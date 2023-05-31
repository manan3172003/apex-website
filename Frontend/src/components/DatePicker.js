import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const MyDatePicker = (props) => {
  var size = null
  if (props.class === "sm") {
    size = "6rem"
  }
  else if (props.class === "lg") {
    size = "11rem"
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker sx={{ width: size}} label = {props.label}/>
    </LocalizationProvider>
  );
}