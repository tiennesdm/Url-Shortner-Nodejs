const express = require("express");
console.log('hello from routes');

const ShortController = require('../../controller/shortController');

const router = express.Router();

router.get("/:code", ShortController.getUrl);

router.post("/postUrl", ShortController.postUrl);

module.exports = router;