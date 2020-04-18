// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Tables (aka Customer List)
var tables = [
  {
    name: "Test Customer 1",
    phoneNum: "000-000-0000",
    email: "test@test.com",
    id: "1"
  },
  {
    name: "Test Customer 2",
    phoneNum: "000-000-0000",
    email: "test@test.com",
    id: "2"
  },
  {
    name: "Test Customer 3",
    phoneNum: "000-000-0000",
    email: "test@test.com",
    id: "3"
  },
  {
    name: "Test Customer 4",
    phoneNum: "000-000-0000",
    email: "test@test.com",
    id: "4"
  }
];

var waitlist = [];

//Home Page
app.get("/", function(req, res) 
{
  res.sendFile(path.join(__dirname, "index.html"));
});

//Add reservation
app.get("/reserve", function(req, res) 
{
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//View Reservations
app.get("/tables", function(req, res)
{
  res.sendFile(path.join(__dirname, "tables.html"));
});

//View Waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

//API Tables
app.get("/api/tables", function(req, res) 
{
  return res.json(tables);
});

//API Waitlist
app.get("/api/waitlist", function(req, res)
{
  return res.end();
});

//New Reservation POST
app.post("/api/tables", function(req, res) 
{
  var newRes = req.body;

  if (tables.length <5) {
    tables.push(newRes);
  }
  else {
    waitlist.push(newRes);
  }
  return res.end();
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});