var express = require("express");
var router = express.Router();
const CodeDomainV = require("../models/code_domainValues");

// Basically "CodeDomainV" stands for Code Domain Values;

router.get("/getAll/:codedomainId", async function(req, res, next) {
    var CdomainV = await CodeDomainV.find({ deleted: null, codedomain: req.params.codedomainId });
    res.json({ message: "success", data: CdomainV });
});

router.post("/create", async function(req, res, next) {
    var Cr = await CodeDomainV.create(req.body);
    res.json({ message: "success", data: Cr });
});

router.get("/:id", async function(req, res, next) {
    var Cr = await CodeDomainV.findOne({ _id: req.params.id });
    res.json({ message: "success", data: Cr });
});

router.delete('/:id', async function(req, res, next) {
    var CR = await CodeDomainV.updateOne({
        _id: req.params.id,
    }, {
        $set: {
            deleted: new Date().getTime(),
        },
    });

    res.json({
        message: 'success',
        data: CR
    })
})

router.post("/update", async function(req, res, next) {
    var ur = await CodeDomainV.updateOne({ _id: req.body.id }, {
        $set: req.body
    });
    res.json({ message: "success", data: ur });
});


module.exports = router;