var express=require('express')
var app=express();

app.get('/',(req,resp)=>{
resp.send(
    "<h1>Welcome to My Web Application</>"
    +"<hr/>"
    +"<h3>Laptop<h3/>"
    +"<h3>mobile<h3>"
    +"<h3>TV</h3>"
)
});

app.listen(9000);
console.log("listening at port 9000");