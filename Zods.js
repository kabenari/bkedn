const express  = require('express');

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID = req.query.kidneyID;

    if(username != "swarup" || password != "pass"){
        res.status(400).json({"msg":"i mean somethings wrong dear in the inputs"})
        return
    }

    if(kidneyID != 1 && kidneyID != 2){
        res.status(400).json({"msg":"i mean somethings wrong dear in the inputs"})
        return
    }

    res.json({
        msg: "kidneys are fine !"
    })

})


app.listen(3000)
