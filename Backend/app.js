const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const db = require('./util/dbconnection');
const shortUrlRoutes = require('./routes/shortRoutes');
console.log('hello from app.js');


const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use("/", express.static(path.join(__dirname, "rentomojo")));
app.use('/',shortUrlRoutes);
//app.use("/api/user", userRoutes);
//app.use('/api/comment', commentRoutes);
//app.use('/api/vote', voteRoutes);

app.use((err, req, res, next) => {
    // console.log('error:::,', err);

    res.status(400).send(err.message)
});
module.exports = app;