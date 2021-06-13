const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    url_type: String, //(companywebsite,facebook,instagram etc)
    url: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },

}, { timestamps: true })
module.exports = mongoose.model('url', schema)