var express = require("express");
const { body, validationResult } = require("express-validator");
var router = express.Router();
var authentication = require("../utils/authentication");

router.post(
  "/GetToken",
  [
    // username must be an email
    body("username").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 5 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res
      .status(200)
      .send(
        JSON.stringify({ accessToken: authentication.getSignedJWT(req.body) })
      );

    res.destroy();
  }
);

module.exports = router;
