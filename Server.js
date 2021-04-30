var express =  require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname,"home.html"));
})

app.get('/reserve',function(req,res){

    res.sendFile(path.join(__dirname,"reserve.html"));
})


app.get('/tables',function(req,res){

    res.sendFile(path.join(__dirname,"tables.html"));
})



require("./apis")(app);



app.listen(PORT,function(){

    console.log("HOLA");
})



