import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function OutlinedCard(props) {
    const card = (
        <React.Fragment>
          <CardContent>
            <Typography variant="body2">
              {props.option.airport} ({props.option.PlaceId})
            </Typography>
          </CardContent>
        </React.Fragment>
      );

    return (
      <React.Fragment >
        <Box  sx={{width: "100%", m: 0}} {... props.passbyprops}>
        <Card sx={{width: "100%", m: 0}} {... props.passbyprops}variant="outlined">{card}</Card>
        </Box>
        </React.Fragment>
    );
}