const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json({ limit: '1mb' })); // Body parsing middleware should come first.// Serve static files.
app.listen(3000, '192.168.68.112', () => console.log("Listening at 192.168.68.112:3000"));
require('dotenv').config();

const YELP_API_KEY = process.env.YELP_API_KEY;
const GOOGLE_API = process.env.GOOGLE_API
console.log(YELP_API_KEY)
console.log(GOOGLE_API)

const apiOptions ={
    headers:{
      Authorization: 'Bearer ' + YELP_API_KEY ,
    },
  };


  async function getYelpApi(transactionType, cityName){
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=Restaurant+${transactionType}&location=${cityName}`;
    const apiInfo = await fetch(yelpUrl, apiOptions)
    const apiInfoResponse = await apiInfo.json();
    //console.log(apiInfoResponse)
    return apiInfoResponse;
  }


  
  app.get('/api/:transactionType/:city', async (request, response) => {
    const transactionType = request.params['transactionType']
    const cityName = request.params['city']
    const yelpApiInfo = await getYelpApi(transactionType, cityName);
    response.json(yelpApiInfo)
  })

  app.get('/googleApi', async (request, response) => {
    const googleApi = GOOGLE_API;
    const googleApi_json = JSON.stringify({API: googleApi })
    response.json(googleApi_json)
  })
