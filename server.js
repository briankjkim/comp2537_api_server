const express = require('express');
const app = express();
const https = require('https');
const mongoose = require('mongoose');

// Connect to mongodb with mongoose module
mongoose.connect("mongodb://localhost:27017/test",
 {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyparser.urlencoded({
    extended: true
  }));


app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


app.get('/', function(req, res) {
    console.log("GET Request received");
    res.sendFile(__dirname + "pokemon_api_30.json");
  })

