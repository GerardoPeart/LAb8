var Tables = require("./api/Tabledata");
var Waitlist = require("./api/waitlistdata");

var express =  require("express");
var app = express();

module.exports = function(app){

app.get("/api/tables", function(req,res){
res.json(Tables);

});

app.get("/api/waitlist", function(req, res) {
    res.json(Waitlist);
  });
}

app.post("/api/tables", function(req, res) {

    if (tableData.length < 5) {
      Tables.push(req.body);
      res.json(true);
    }
    else {
      Waitlist.push(req.body);
      res.json(false);
    }
  });

