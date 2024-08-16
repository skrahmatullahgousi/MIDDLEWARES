const { error } = require("console");
const express= require("express");
const { access } = require("fs");
const app= express();
const port=5000;
/*app.use("/sk/:name/:id",(req,res)=>{
    let {q}=req.query;
    let {name:sk,id:i}= req.params;
    console.log(q);
    console.log(sk);
    console.log(i);
  
   res.send("this middleware");

})// norrmal middeware*/ 


//secound miidleware
//creating a utility middleware


/*app.use("/hello",(req,res,next)=>{
    let {p}=req.query ;
    if(p==="acessobtained"){
    next();    
    }
    else{
        console.log("access deined");
    
    }
   
}); accesstoken

*/
let checking =app.use("/hello",(req,res,next)=>{
    let {p}=req.query ;
    if(p==="acessobtained"){
    next();    
    }
    else{
        console.log("access deined");
    
    }
   
});
app.use("/error",(req,res)=>{
    throw new   Error("not working");
})

app.get("/",checking,(req, res)=>{
    res.send("this route");
});



app.use((req,res, next)=>{
    let time=new Date(Date.now());
    req.time=time.toString();
    console.log(req.path, req.hostname,req.method);
    console.log(req.time);

}) //about the utitlity method 




app.use((req,res,next)=>{
    console.log("secound middleware");

    next();
});






//we cratreing acces token  by useing the middleware


app.get("/",(req,res)=>{
    console.log("this route");
});
app.get("/routing",(req,res)=>{
    console.log("this path and route described");
})
app.listen(5000,()=>{
    console.log("listing");
})
