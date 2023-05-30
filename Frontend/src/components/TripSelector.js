import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function TripSelector() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Trip</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Round-Trip" control={<Radio />} label="Round-Trip" />
        <FormControlLabel value="One-way" control={<Radio />} label="One-way" />
        <FormControlLabel value="Multi-City" control={<Radio />} label="Multi-City" />
      </RadioGroup>
    </FormControl>
  );
}
