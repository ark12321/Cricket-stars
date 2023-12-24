
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){ //getting request from home
    res.sendFile(__dirname + "/index.html");                      // res.send("calculator started");
});

app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var result= n1 * n2;

    console.log("the result is: "+result);
     res.send("the result is: "+result);                      
});

app.get("/bmiCalculator",function(req,res){ //getting request from /bmiCalculator
    res.sendFile(__dirname + "/bmiCalculator.html");                      // res.send("calculator started");
});

app.post("/bmiCalculator",function(req,res){
    var wt=Number(req.body.w);
    var ht=Number(req.body.h);
    var result1= wt / Math.pow(ht,2);

    console.log("Your BMI is: "+result1);
     res.send("Your BMI is: "+result1);                      
});

app.listen(3000,function(){console.log("sucessfully loaded calculator");});






/*
mkdir Calculator
touch calculator.js
npm init (calculator.js as start point)
npm install express
--npm install body-parser
nodemon calculator.js  (starting server --just like live server)
node calculator.js (to  run js iin hyper)

*/