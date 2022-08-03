var express = require("express");
var app     = express();
var request = require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
});

app.get("/results",function(req,res){
    var query=req.query.search;
    var url="https://api.themoviedb.org/3/search/movie?api_key=5e735faa053a4061620dc85b51edc641&query="+query;

    request(url,function(error,response,body){
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            console.log(data);
            res.render("results",{data:data});
        }
    });
});





var server=app.listen(3000,function(){
    console.log("Sunucu portu : %d",server.address().port);
});

