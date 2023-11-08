const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json({ limit: '1mb' })); // Body parsing middleware should come first.// Serve static files.
app.listen(3000, '192.168.68.112', () => console.log("Listening at 192.168.68.112:3000"));
require('dotenv').config();

const YELP_API_KEY = process.env.YELP_API_KEY;
console.log(process.env)
console.log(YELP_API_KEY)

const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=Dublin';
const apiOptions ={
    headers:{
      Authorization: 'Bearer ' + YELP_API_KEY ,
    },
  };

  async function getYelpApi(){
    const apiInfo = await fetch(yelpUrl, apiOptions)
    const apiInfoResponse = await apiInfo.json();
    //console.log(apiInfoResponse)
    return apiInfoResponse;

  }

  app.get('/api', async (request, response) => {
    const yelpApiInfo = await getYelpApi();
    response.json(yelpApiInfo)


    /*database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });*/
  });
  
getYelpApi()

