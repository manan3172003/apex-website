import Amadeus from "amadeus";
import {Headers} from "node-fetch";
import fetch from "node-fetch";
import {Router, response} from "express";
import {client} from "./config.js";

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
}

const router = Router();
const API = `api`;
// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: client.CLIENT_ID,
  clientSecret: client.CLIENT_SECRET
});
// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
  // Getting token from Amadeus API
try{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
  var urlencoded = new URLSearchParams();
  urlencoded.append("client_id", "fqmrmZmC3pxer72HRZTWhfd8hc7k7N4A");
  urlencoded.append("client_secret", "BhRZ7KhFRJJAzVWh");
  urlencoded.append("grant_type", "client_credentials");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  
  await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", requestOptions)
  .then(response => response.json())
    .then(async result => {
      const token = result.access_token;
      const { page, subType, keyword } = req.query;
      // API call with params we requested from client app

      var myHeaders1 = new Headers();
      myHeaders1.append("Authorization", `Bearer ${token}`);

      var requestOptions1 = {
        method: 'GET',
        headers: myHeaders1,
        redirect: 'follow'
      };
        try{
          const response = await fetch(`https://test.api.amadeus.com/v1/reference-data/locations?subType=${subType}&keyword=${keyword}`, requestOptions1)
          .then(response => response.text())
          .then(async result => {
            console.log(JSON.parse(result));


            // Sending response for client
            try {
              await res.json(JSON.parse(result));
            } catch (err) {
              await console.log(err);
            }
          })
          .catch(error => console.log('error', error));
            // console.log(req.query)
            // console.log(response.body)
          } catch(err){
            await console.log(err)
          }

    })
    .catch(error => console.log('error', error));

  } catch(err){
    // await console.log(err)
  }
  
});

router.get('/api/test', async (req, res) => {
  try{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const { keyword } = req.query;

    fetch(`https://www.skyscanner.ca/g/autosuggest-search/api/v1/search-flight/CA/en-US/${keyword}?isDestination=false&enable_general_search_v2=true&autosuggestExp=`, requestOptions)
      .then(response => response.text())
      .then(async result => {
        // Sending response for client
        try {
          // console.log(result);
          result = JSON.parse(result);
          var new_result = [];
          for (var i = 0; i < result.length; i++) {
            if ("Tags" in result[i]){
              new_result.push({
                "Found": "No",
                "PlaceId": result[i]["AirportInformation"]['PlaceId'],
                "PlaceName": result[i]["AirportInformation"]["PlaceName"],
                "CityName": result[i]["CityName"],
                "AirportRegionId": result[i]["AirportInformation"]["RegionId"],
                "CityRegionId": result[i]["RegionId"],
                "CountryName": result[i]["CountryName"],
                "Distance": result[i]["AirportInformation"]["Distance"],
              })
            } else {
              new_result.push({
                "Found": "Yes",
                "PlaceId": result[i]["PlaceId"],
                "PlaceName": result[i]["PlaceName"],
                "CityName": result[i]["CityName"],
                "CountryName": result[i]["CountryName"],
              })
            }
          }
          console.log(new_result);
          await res.json(new_result);
        } catch (err) {
          await console.log(err);
        }
      })
      .catch(error => console.log('error', error));
  }
  catch(err){
    console.log(err)
  }
})

export default router;