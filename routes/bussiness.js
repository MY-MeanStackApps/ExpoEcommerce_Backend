var express = require("express");
var passwordHash = require("password-hash");
var router = express.Router();
const Individual = require("../models/individual");
const URL = require("../models/url");
const MEDIA = require("../models/media");
const Bussiness_Individual = require("../models/business_individual");
const Bussiness = require("../models/bussiness");
const Email_Address = require("../models/email_address");
const PhoneBook = require("../models/phone_book");
const Address = require("../models/address");

router.post("/create", async function(req, res, next) {
    var ur = await Bussiness.create(req.body);
    res.json({ message: "success", data: ur });
});

router.get("/:id", async function(req, res, next) {
    var ur = await Bussiness.findOne({ _id: req.params.id });
    res.json({ message: "success", data: ur });
});

router.post("/bussinessForm", async function(req, res, next) {

    var bussinessGeneral = req.body.bussinessGeneral;
    var bussinessIndividual = req.body.bussinessIndividual;
    var address1 = req.body.address1;
    var address2 = req.body.address2;
    var bussinessEmail = req.body.bussinessEmail;
    var url = req.body.url;

    var media_KycDocuments_incorporation = req.body.media.KycDocuments.incorporation;
    var media_KycDocuments_addressvalidation = req.body.media.KycDocuments.addressvalidation;
    var media_KycDocuments_IEC = req.body.media.KycDocuments.IEC;
    var media_KycDocuments_AadharCard = req.body.media.KycDocuments.AadharCard;

    var media_TradeMembership_type1 = req.body.media.TradeMembership.type1;
    var media_TradeMembership_type2 = req.body.media.TradeMembership.type2;
    var media_TradeMembership_type3 = req.body.media.TradeMembership.type3;

    if (req.body.sameasAbove == true) {
        address1.address_type = 'Correspondence';
        await Address.create(address1);
    } else {
        await Address.create(address2);
    }

    // await Bussiness.create(bussinessGeneral);
    await Bussiness.updateOne({
        individual: bussinessGeneral.individual,
    }, {
        $set: bussinessGeneral,
    })

    await Bussiness_Individual.create(bussinessIndividual);
    await Address.create(address1);
    await Email_Address.create(bussinessEmail);
    if (url.url != '') {
        await URL.create(url);
    }
    if (media_KycDocuments_incorporation.url != '') {
        await MEDIA.create(media_KycDocuments_incorporation);
    }
    if (media_KycDocuments_addressvalidation.url != '') {
        await MEDIA.create(media_KycDocuments_addressvalidation);
    }
    if (media_KycDocuments_IEC.url != '') {
        await MEDIA.create(media_KycDocuments_IEC);
    }
    if (media_KycDocuments_AadharCard.url != '') {
        await MEDIA.create(media_KycDocuments_AadharCard);
    }
    if (media_TradeMembership_type1.url != '') {
        await MEDIA.create(media_TradeMembership_type1);
    }
    if (media_TradeMembership_type2.url != '') {
        await MEDIA.create(media_TradeMembership_type2);
    }
    if (media_TradeMembership_type3.url != '') {
        await MEDIA.create(media_TradeMembership_type3);
    }

    res.json({ message: "success" });
});

router.post("/BussinessIndividual", async function(req, res, next) {
    var ur = await Bussiness.updateOne({
        individual: req.body.individual,
    }, {
        $set: req.body,
    })

    res.json({ message: "success", data: ur });
});

router.post("/CreateTax", async function(req, res, next) {
    var first = req.body.first;
    var second = req.body.second;
    await MEDIA.create(first);
    await MEDIA.create(second);
    res.json({ message: "success" });
});


module.exports = router;