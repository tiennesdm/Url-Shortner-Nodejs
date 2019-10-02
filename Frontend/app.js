const path = require("path");
const express = require("express");




const app = express();



app.use("/", express.static(path.join(__dirname, "public")));

app.use((err, req, res, next) => {
    // console.log('error:::,', err);

    res.status(400).send(err.message)
});
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;