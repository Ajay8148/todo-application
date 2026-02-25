const express = require('express');

const app = express();

app.get('/', (req,res)=>{
res.send("Day24 Pipeline Working");
});

app.listen(3000, ()=>{
console.log("Server running");
});
