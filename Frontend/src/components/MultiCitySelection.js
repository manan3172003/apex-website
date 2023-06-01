import { Grid, Container } from "@mui/material";
import SearchAutocomplete from "../components/search-autocomplete";
import {MyDatePicker} from "../components/DatePicker"


export const MultiCitySelection = (props) => {
    return (
        <Grid container justifyContent={"center"} spacing={2} lg={6}>
            <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={props.class} search={props.search} setSearch={props.setSearch} label="From"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><SearchAutocomplete class={props.class} search={props.search} setSearch={props.setSearch} label="To"/></div>
              </Grid>
              <Grid item xs={4} lg={4}>
              <div><MyDatePicker class={props.class} label="Departure"/></div>
              </Grid>
        </Grid>
    )
}