var express = require("express");
var router = express.Router();
var { getAllUser } = require("../data-access/users-dataaccess");

router.get("/all", ({ res }) => getAllUser().then((users) => res.json(users)));

module.exports = router;
