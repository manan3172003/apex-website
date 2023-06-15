import React from "react";
import SearchAutocomplete from "../components/search-autocomplete";
import {MyDatePicker} from "../components/DatePicker"
import {TripSelector} from "../components/TripSelector";
import { getAmadeusData } from "../api/amadeus.api";
import '../Styles.css'
import axios from "axios"
import { Grid, Container } from "@mui/material";
import {NumTraveller} from "../components/NumTraveller";
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';

// Main component 
const SearchRoot = () => {

  /* 
    With new React API we can define state in functional component like this *React.useState*
    1. first element in desctructured array - state itself
    2. second element - dispatch func, that allows us to change state
    3. we can create as many states as we need
  */
  const [search, setSearch] = React.useState({
    keyword: "",
    city: true,
    airport: true,
    page: 0
  });

  const [loading, setLoading] = React.useState(false)

  /* 
    Also React has lifecycle methods. On of them is *useEffect* - the same as ComponentDidMount | ComponentDidUpdate | ComponentWillUnmount in class components 
    1. First argument is callback func, we define there all logic we need to execute when component mounts
    2. Second argument - array of dependencies. If one of them changing - we executing callback func again

    ** If Array is empty - callback will execute only once, when mount
    ** If you not including second argument - callback will execute each time, when component will change

    3. We can create as many *useEffect* funcs, as we need
  */

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const elementClassName = isSmallScreen ? 'small' : 'large';
  const buttonSize = isSmallScreen ? '2.5rem' : '3.5rem';

  var [tripType, setTripType] = React.useState("Round-Trip");

  return (
    <div className="container" class="mt-4">
      <div className="search-panel" class="flex-col">
        <Container maxWidth="xl">
          
      <div class="flex justify-center"><TripSelector onChange={setTripType} tripType={tripType}/></div>
        <div style={{display: tripType.localeCompare("Round-Trip") == 0 ? "block": "none"}}>
        <Grid container justifyContent={"center"} spacing={2} >
            <Grid item xs={6} lg={2}>
            <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="From"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="To"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><MyDatePicker class={elementClassName} label="Departure"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><MyDatePicker class={elementClassName} label="Return"/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <div><NumTraveller class={elementClassName}/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <div><Button color="primary" variant="contained" style={{width: "100%", fontWeight: "bold", height: buttonSize}}>Search</Button></div>
            </Grid>
         </Grid>
        </div>
        <div style={{display: tripType.localeCompare("One-way") == 0 ? "block": "none"}}>
        <Grid container justifyContent={"center"} spacing={2} >
            <Grid item xs={4} lg={2}>
            <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="From"/></div>
            </Grid>
            <Grid item xs={4} lg={2}>
            <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="To"/></div>
            </Grid>
            <Grid item xs={4} lg={2}>
            <div><MyDatePicker class={elementClassName} label="Departure"/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <div><NumTraveller class={elementClassName}/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <div><Button color="primary" variant="contained" style={{width: "100%", fontWeight: "bold", height: buttonSize}}>Search</Button></div>
            </Grid>
         </Grid>
        </div>
        <div style={{display: tripType.localeCompare("Multi-City") == 0 ? "block": "none"}}>
        <Grid container justifyContent={"center"} spacing={2} >
          <Grid container item justifyContent={"center"} spacing={2} lg={6}>
              {/* <MultiCitySelection class={elementClassName} search={search} setSearch={setSearch}/> */}
              <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="From"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="To"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><MyDatePicker class={elementClassName} label="Departure"/></div>
              </Grid>

              <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="From"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={elementClassName} search={search} setSearch={setSearch} label="To"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><MyDatePicker class={elementClassName} label="Departure"/></div>
              </Grid>
          </Grid>
            <Grid item justifyContent={"center"} xs={12} lg={2}>
            <div><NumTraveller class={elementClassName}/></div>
            </Grid>
            <Grid item justifyContent={"center"} xs={12} lg={2}>
            <div><Button color="primary" variant="contained" style={{width: "100%", fontWeight: "bold", height: buttonSize}}>Search</Button></div>
            </Grid>
         </Grid>
        </div>
        </Container> 
      </div>
    </div>
  );
};

export default SearchRoot;