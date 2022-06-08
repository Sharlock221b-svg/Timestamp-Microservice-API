// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

//for "/api" route return current Unix and UTC time
app.get("/api", (req, res) => {
    const unix =  Math.floor( new Date().getTime());
    //console.log(unix);
    const utc = new Date().toUTCString();
    res.json({
      "unix": unix,
      "utc": utc
    })
})

//for "/api/unix|date" returns the unix and utc time for the date
app.get("/api/:key/", (req, res) => {
  //validating the date
  let date = (new Date(req.params.key)).getTime() > 0; 
  //is called through date
  if(date === true)
  {
    res.json({
       "unix": Math.floor(new Date(req.params.key).getTime()),
       "utc": new Date(req.params.key).toUTCString()
    }
    );
  }
  else if(!isNaN(req.params.key)) //else if called through unix
  {
    res.json({
      "unix": Math.floor(req.params.key),
      "utc": new Date(Number(req.params.key)).toUTCString()
    })
  }
  else{  //handeling invalid date
    res.json({
      error : "Invalid Date"
    })
  }
})

//For handling undefined routes
app.get("*", (req, res) => {
   res.write("Not Found");
   res.end();
})


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
