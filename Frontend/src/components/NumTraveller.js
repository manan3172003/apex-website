import {TextField} from '@mui/material';
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const NumTraveller = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  var size = null
  if (props.class === "small") {
    size = "100%"
  }
  else if (props.class === "large") {
    size = "10rem"
  }

  return (
    <div>
      <TextField
         label={"Travellers and Cabin"}
         InputProps={{readOnly: true}}
         style={{width: size}}
         sx={{ input: { cursor: 'pointer' } }}
         onClick={handleClick}
         InputLabelProps={{
            shrink: true,
          }}
         defaultValue={'1 Adult, Economy'}
         size={props.class}
        />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div>
            
        </div>
      </Popover>
    </div>
  );
}