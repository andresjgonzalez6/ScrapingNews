//require all server packages
const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
//create functions to scrape from the news url
//store the scaped info into mongo db
//pull the data from mongo to html
//using handlebars to display the data
let app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines');
let PORT = process.env.PORT || 3000;

//Handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const router = require("./routes/routes");
app.use("/", router);

app.listen(PORT, () => console.log("News reel on port: " + PORT));
