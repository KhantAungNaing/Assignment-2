const express = require('express');
const app = express()
app.get("",(req,res)=>{

    res.send("<h1>This is the home page about the Operating System(OS).</h1>");
}) 

app.get("/WindowSystem",(req,res)=>{

    res.sendFile(__dirname+"/WindowSystem.html");
})

app.get("/LinuxSystem",(req,res)=>{

    res.sendFile(__dirname+"/LinuxSystem.html");
})

app.get("/MacOS",(req,res)=>{

    res.sendFile(__dirname+"/MacOS.html");
})

app.get("/AndriodOS",(req,res)=>{

    res.sendFile(__dirname+"/AndriodOS.html");
})

app.listen(3000,()=>{
    console.log('Server is starting up at: port :3000');
}



)