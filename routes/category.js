var express = require("express");
var router = express.Router();
const Category = require("../models/category");

router.get("/getAll", async function(req, res, next) {
    var Cr = await Category.find({ deleted: null });
    res.json({ message: "success", data: Cr });
});

router.post("/create", async function(req, res, next) {
    var Cr = await Category.create(req.body);
    res.json({ message: "success", data: Cr });
});

router.get("/:id", async function(req, res, next) {
    var Cr = await Category.findOne({ _id: req.params.id });
    res.json({ message: "success", data: Cr });
});

router.delete('/:id', async function(req, res, next) {
    var CR = await Category.updateOne({
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
    var ur = await Category.updateOne({ _id: req.body.id }, {
        $set: req.body
    });
    res.json({ message: "success", data: ur });
});


module.exports = router;