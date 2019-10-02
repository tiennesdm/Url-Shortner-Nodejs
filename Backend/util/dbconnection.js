const mongoose = require("mongoose");
mongoose
    .connect(
        "mongodb://localhost:27017/short-url", { useNewUrlParser: true }
        // "mongodb+srv://tiennesdm:BmKfRMa4IhjaDhRU@meanstack-aphhh.mongodb.net/rentomojo?retryWrites=true", { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
module.exports = mongoose;