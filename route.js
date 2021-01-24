const express = require("express");
const router = express.Router();
const { messages } = require('./api');

router.post("/messages", messages);

module.exports = router;
