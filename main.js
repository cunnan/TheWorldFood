const express = require("express");
var theWorldFood = express();
theWorldFood.listen(5050,()=>{
    console.log("theWorldFood:5050 listening...");
});