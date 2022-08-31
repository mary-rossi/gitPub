const express = require("express");
const drinks = require("./models/drinks.js")

const app = express();
const port = 3000;

//setting view engine to ejs
// app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.send("Welcome to the Gitpub App!")
});

app.get("/drinks/", (req, res)=>{
    res.render("drinks_index.ejs", {
        allDrinks: drinks
    })
});

app.get("/drinks/:indexOfDrinksArray", (req, res)=>{
    res.render("drinks_show.ejs", {
        drink: drinks[req.indexOfDrinksArray]
    })
})

app.listen(port, ()=>{
    console.log(`listening on port`, port)
});

