import express from "express";
const app = express();

app.get("/",(req,res,next)=>{
    res.send("Tour booking API");
});

app.get("/tours",(req,res,next)=>{
    res.send("Get a list of tours");
});

app.post("/tours",(req,res,next)=>{
    res.send("Add a tour....");
});


app.listen(process.env.PORT||8091,()=>{console.log("Server has successfully started");
});
