import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const TripSelector = (props) => {
  return (
    <FormControl style={{marginBottom: "1rem"}}>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Round-Trip"
        value={props.tripType}
        onChange={(event) => props.onChange(event.target.value)}
      >
        <FormControlLabel value="Round-Trip" control={<Radio />} label="Round-Trip" />
        <FormControlLabel value="One-way" control={<Radio />} label="One-way" />
        <FormControlLabel value="Multi-City" control={<Radio />} label="Multi-City" />
      </RadioGroup>
    </FormControl>
  );
}
