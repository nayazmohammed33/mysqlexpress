const app=require("./app");
require('dotenv').config()
const port=8080;

app.listen(port,function(){
    console.log("server running   "+port);
})