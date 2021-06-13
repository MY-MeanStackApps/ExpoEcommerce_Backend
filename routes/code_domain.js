var express = require("express");
var router = express.Router();
const CodeDomain = require("../models/code_domain");

router.get("/getAll", async function(req, res, next) {
    var Cr = await CodeDomain.find({ deleted: null });
    res.json({ message: "success", data: Cr });
});

router.post("/create", async function(req, res, next) {
    var Cr = await CodeDomain.create(req.body);
    res.json({ message: "success", data: Cr });
});

router.get("/:id", async function(req, res, next) {
    var Cr = await CodeDomain.findOne({ _id: req.params.id });
    res.json({ message: "success", data: Cr });
});

router.delete('/:id', async function(req, res, next) {
    var CR = await CodeDomain.updateOne({
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
    var ur = await CodeDomain.updateOne({ _id: req.body.id }, {
        $set: req.body
    });
    res.json({ message: "success", data: ur });
});


module.exports = router;