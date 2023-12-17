const express = require('express')

const app = express();

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("your Kidney Length is " + kidneyLength);
})

app.listen(3000)