var express = require("express");
var passwordHash = require("password-hash");
var router = express.Router();
const Individual = require("../models/individual");
const User = require("../models/user");
const OTP = require("../models/otp");
const OTP_Attempt = require("../models/otp_attempt");


router.post("/setOTP", async function(req, res, next) {
    var OT = await OTP.create(req.body);

    res.json({ message: "success", data: ur });
});

module.exports = router;