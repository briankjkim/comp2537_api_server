const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());



app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


app.get('/:id', function(req, res) {
    let id = req.params.id;
    console.log("GET Request received");
    res.sendFile(__dirname+ `/${id}.json`);
  })

