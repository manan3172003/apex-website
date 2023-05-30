import React from "react";
import SearchAutocomplete from "../components/search-autocomplete";
import MyDatePicker from "../components/DatePicker"
import TripSelector from "../components/TripSelector";
import { getAmadeusData } from "../api/amadeus.api";
import '../Styles.css'
import axios from "axios"

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

  return (
    <div className="container" class="mt-4">
      <div className="search-panel" class="flex-col">
        <div class="flex justify-center">
          <TripSelector />
        </div>
        <div class="flex flex-wrap justify-center space-x-8">
          <div class="ml-8">
            <SearchAutocomplete search={search} setSearch={setSearch} label="From"/>
          </div>
          <div>
            <SearchAutocomplete search={search} setSearch={setSearch} label="To"/>            
          </div>
          <div>
            <MyDatePicker label="Departure"/>  
          </div>
          <div>
            <MyDatePicker label="Return"/>          
          </div>
        </div>    
      </div>
    </div>
  );
};

export default SearchRoot;