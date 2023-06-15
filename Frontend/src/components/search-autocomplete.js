import React, { useCallback, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios'
import { getAmadeusData } from "../api/amadeus.api";
import { debounce } from "lodash"
import SeachListItem from "./SearchListItem";

const SearchAutocomplete = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [names, setNames] = React.useState([])

  // Same example as in *SearchRoot* component
  React.useEffect(() => {

    setLoading(true)
    const { out, source } = getAmadeusData({keyword: search});

    out.then(res => {
      setOptions(res.data);
      // Configure options format for proper displaying on the UI
      setNames(res.data.map(i => {
      if (i.Found === "Yes"){
        if (i.PlaceId.at(-1) === "A") {
          return ({name: `${i.CityName} Any`, PlaceId: i.PlaceId ,airport: i.PlaceName})
        } else {
          return ({name: `${i.CityName} (${i.PlaceId})`, PlaceId: i.PlaceId ,airport: i.PlaceName})
        }

      } else {
        return ({name: `${i.PlaceName} (${i.PlaceId})`, PlaceId: i.PlaceId ,airport: i.PlaceName}
      )
      }
      }));

      console.log(names);
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setOptions([]);
      setLoading(false)

    });

    return () => {
      source.cancel()
    };
  }, [search]);

  const label = props.label

  return (
    // This is Material-UI component that also has it's own props
    <>
      <Autocomplete
        open={open}
        filterOptions={(options, state) => options}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) =>
          option.PlaceId === value.PlaceId
        }
        // onInputChange={(e, value) => {
        //   if (value) {
        //     // console.log(props.search)
        //     // console.log(keyword)
        //     console.log(value)
        //     setSearch(value)
        //   }

        // }}
        getOptionLabel={option => option.name}
        renderOption={(props, option) => {
          // return <h6 {...props}>{option.PlaceName}</h6>
          return (<SeachListItem key={option.PlaceId} passbyprops={props} option={option} />)
        }}
        options={names}
        loading={loading}
        renderInput={params => {
          return (
            <TextField
              label={label}
              size= {props.class}
              style={{ width: '100%'}}
              onChange={e => {
                console.log(e.target.value)
                e.preventDefault();
                setSearch(e.target.value);
              }}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
            />
          );
        }}
      />
    </>
  )
};

export default SearchAutocomplete;
