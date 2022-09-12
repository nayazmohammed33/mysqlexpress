const express =require("express");
const app =express();
const userrouter=require("./routes/user.routes");

app.use(express.json());

app.use("/",userrouter);


module.exports=app;