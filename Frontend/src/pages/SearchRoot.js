import React from "react";
import SearchAutocomplete from "../components/search-autocomplete";
import {MyDatePicker} from "../components/DatePicker"
import TripSelector from "../components/TripSelector";
import { getAmadeusData } from "../api/amadeus.api";
import '../Styles.css'
import axios from "axios"
import { Grid, TextField, Item, Container } from "@mui/material";
import {NumTraveller} from "../components/NumTraveller";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

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

  const [dataSource, setDataSource] = React.useState([]);

  const [loading, setLoading] = React.useState(false)

  /* 
    Also React has lifecycle methods. On of them is *useEffect* - the same as ComponentDidMount | ComponentDidUpdate | ComponentWillUnmount in class components 
    1. First argument is callback func, we define there all logic we need to execute when component mounts
    2. Second argument - array of dependencies. If one of them changing - we executing callback func again

    ** If Array is empty - callback will execute only once, when mount
    ** If you not including second argument - callback will execute each time, when component will change

    3. We can create as many *useEffect* funcs, as we need
  */
  React.useEffect(() => {
    // Turn on loader animation
    setLoading(true)


    /* Getting data from amadeus api.
       out - our data that coming from backend.
       source - token for cancelation request.
    */

    const { out, source } = getAmadeusData(search);

    out.then(res => {
      // If we send too many request to the api per second - we will get an error and app will break
      // Therefore we implemented simple check to prevent error on client side.
      setDataSource(res); // dispatching data to components state
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setLoading(false)
    });

    // If we returning function from *useEffect* - then this func will execute, when component will unmount
    return () => {
      source.cancel()
    };
  }, [search]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="container" class="mt-4">
      <div className="search-panel" class="flex-col">
        <Container maxWidth="xl">
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <div class="flex justify-center"><TripSelector /></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><SearchAutocomplete class= "small" search={search} setSearch={setSearch} label="From"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><SearchAutocomplete class= "small" search={search} setSearch={setSearch} label="To"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><MyDatePicker class="small" label="Departure"/></div>
            </Grid>
            <Grid item xs={6} lg={2}>
            <div><MyDatePicker class="small" label="Return"/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <div><NumTraveller class="small"/></div>
            </Grid>
            <Grid item xs={12} lg={2}>
            <Button color="primary" variant="contained" style={{width: "100%", fontWeight: "bold", fontSize: "15px"}}>Search</Button>
            </Grid>
         </Grid>
        </Container>
          
      </div>
    </div>
  );
};

export default SearchRoot;