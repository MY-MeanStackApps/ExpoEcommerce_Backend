var express = require("express");
var passwordHash = require("password-hash");
var router = express.Router();
const Individual = require("../models/individual");
const User = require("../models/user");
const OTP = require("../models/otp");
const PhoneBook = require("../models/phone_book");
const EmailAddress = require("../models/email_address");
const { dynamicEmail } = require("./EmailSend");

router.get("/getAll", async function(req, res, next) {
    var ur = await Individual.find({ deleted: null });
    res.json({ message: "success", data: ur });
});

router.post("/create", async function(req, res, next) {
    var isExist = await Individual.findOne({ email: req.body.email });
    if (isExist) {
        res.json({ message: "already" });
    } else {
        rand = Math.floor(Math.random() * 2000 + 999);
        req.body.password = passwordHash.generate(req.body.password);
        var Indivi = await Individual.create(req.body);
        var Obj = {
            individual: Indivi._id,
            username: req.body.email,
            password: req.body.password,
        }

        var ur = await User.create(Obj);
        var otpsend = {
            otp_type: 'email',
            otp: rand,
            otp_expire_ts: '30days',
        }
        var phone = {
            phone_type: 'Register',
            entity_type: 'mobile', //(main,alternate)
            countery_code: '',
            phone_number: req.body.mobile,
            status: '',
            create_user: Indivi._id
        };
        var SavedEmail = {
            email_type: 'Register', // (personel,corporate)
            email_add: req.body.email,
            status: '',
            create_user: Indivi._id
        };
        await EmailAddress.create(SavedEmail);
        await PhoneBook.create(phone);
        await OTP.create(otpsend);
        dynamicEmail(req.body.email, rand)
        res.json({ message: "success", data: Indivi, code: rand });
    }
});

router.get("/:id", async function(req, res, next) {
    var ur = await Individual.findOne({ _id: req.params.id });
    res.json({ message: "success", data: ur });
});

router.post("/updateIndividual", async function(req, res, next) {
    var ur = await Individual.updateOne({ _id: req.body.id }, {
        $set: req.body
    });
    res.json({ message: "success", data: ur });
});

router.delete('/:id', async function(req, res, next) {
    var urUp = await Individual.updateOne({
        _id: req.params.id,
    }, {
        $set: {
            deleted: new Date().getTime(),
        },
    });

    res.json({
        message: 'success',
        data: urUp
    })
})



module.exports = router;