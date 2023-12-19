const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.json())


mongoose.connect("mongodb+srv://hkt:swarup0225@cluster0.6oced8m.mongodb.net/")

const User = mongoose.model('Users',{
    name: String,
    email: String,
    password : String
})

app.post("/signup",async function(req,res){
    const password = req.body.password;
    const username = req.body.username;
    const name = req.body.name;

    const alreadyuser = await UserActivation.findOne({
        email: username
    })

    if(alreadyuser){
        return res.status(400).send("Already An User")
    }

    const user = new User({
        name : name,
        email : username,
        password : password
    })

    user.save();
    res.json({
        msg: "user Added"
    })

})