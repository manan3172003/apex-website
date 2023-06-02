import React, { useCallback, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from 'axios'
import { getAmadeusData } from "../api/amadeus.api";
import { debounce } from "lodash"

const SearchAutocomplete = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [search, setSearch] = React.useState('')
  const [keyword, setKeyword] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  // Configure options format for proper displaying on the UI
  const names = options.map(i => ({ airport: i.PlaceName, name: i.CityName }));

  // Debounce func prevents extra unwanted keystrokes, when user triggers input events 
  const debounceLoadData = useCallback(debounce(setKeyword, 1000), []);

  useEffect(() => {
    debounceLoadData(search);
  }, [search]);

  // Same example as in *SearchRoot* component
  React.useEffect(() => {

    setLoading(true)
    const { out, source } = getAmadeusData({ ...props.search, page: 0, keyword });

    out.then(res => {
      setOptions(res.data);
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setOptions([]);
      setLoading(false)

    });

    return () => {
      source.cancel()
    };
  }, [keyword]);

  // Desctructuring our props
  const { city, airport } = props.search

  const label = props.label

  // var size = null
  // if (!(props.class.localeCompare("small"))) {
  //   size = "100%"
  // }
  // else if (!(props.class.localeCompare("large"))) {
  //   size = "10rem"
  // }


  return (
    // This is Material-UI component that also has it's own props
    <>
      <Autocomplete
        
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) =>
          option.name === value.name && option.type === value.type
        }
        onChange={(e, value) => {
          if (value && value.name) {
            props.setSearch((p) => ({ ...p, keyword: value.name, page: 0 }))
            setSearch(value.name)
            return;
          }
          setSearch("")
          props.setSearch((p) => ({ ...p, keyword: "", page: 0 }))

        }}
        getOptionLabel={option => {
          return option.airport;
        }}
        renderOption={(props, option) => {
          return <h6 {...props}>{option.airport}</h6>
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
                e.preventDefault();
                setSearch(e.target.value);
              }}
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                value: search
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