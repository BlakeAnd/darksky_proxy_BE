const express = require('express');
const request = require('request');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/  ', (req, res) => {
      res.send("howdy");
    }    );


app.get('/weather', (req, res) => {
  const coordinate = req.body;
  // const lat = coordinate.lat.toString;
  // const lon = coordinate.lon.toString;
  const lat = "20.0000";
  const lon = "20.0000";
  const key = process.env.DARKSKY_KEY

  axios
  .get(`https://api.darksky.net/forecast/${key}/${lat},${lon}`)  
  .then(response => {
    const sky = response;
    res.status(200).json(sky)
  })
  .catch(err => {
    res.status(500).json(err);
  })

});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));




// const express = require('express'); // import the express package

// const app = express(); // creates the server

// // handle requests to the root of the api, the / route
// app.get('/a', (req, res) => {
//   res.send('Hello from Express');
// });

// // watch for connections on port 5000
// app.listen(5000, () =>
//   console.log('Server running on http://localhost:5000')
// );