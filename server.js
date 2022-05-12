const express = require('express');
const app = express();



app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


app.get('/', function(req, res) {
    console.log("GET Request received");
    res.sendFile(__dirname + "pokemon_api_30.json");
  })

