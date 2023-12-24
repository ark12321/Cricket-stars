
const express = require('express'); // to load express module
const app = express(); // to assign all the properties to app variable

app.get("/",function(request,response) {   
response.send("Hi Yo");   //responding to the request made at the given location. cam also use "<h1>hello</h1>"
});

app.get("/contact",function(req,res){res.send("contact your administrator");});

app.get("/about",function(req,res){res.send("information discloused");});


app.get("/move",function(req,res){res.send("moved");});


const port = 3000; //assigning port to the server.
app.listen(port,function(){console.log("your server started!");});  //listning to the server at assigned port.-function optional


/*
npm init
npm install package

nodeman */