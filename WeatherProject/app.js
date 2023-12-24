const express = require("express");
const bodyParser =require("body-parser");

const https = require("https");
const app =express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(requ,resp){
      resp.sendFile(__dirname+"/index.html");
    //res.send("server is up and running");
})

app.post("/",function(req,res){

    const appKey="5c99abc78cddc0bc6bad56f53b124486";
    const query =req.body.cityName; 
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid="+appKey;

    https.get(url,function(response){
    // console.log(response.statusCode);

    response.on("data",function(data){
        const weatherData = JSON.parse(data);  //JSON.stringify(object); --prints the asciiValues
        const temp = weatherData.main.temp;
        console.log("the temperature is: "+temp);
        const weatherDescription = weatherData.weather[0].description;
        const icons =  weatherData.weather[0].icon;
        const imageURL = "https://openweathermap.org/img/wn/"+icons+"@2x.png";

        res.write("<h1>The weather is currently " + weatherDescription + "</h1>");
        res.write( "<h1>The temerature in "+query+" is : "+ temp +"</h1>");
        res.write("<img src="+imageURL+">");
        res.send();
        //re.write();re.write();re.send();
    }) 

});


    });

app.listen(3000,function(){console.log("started weaather");});