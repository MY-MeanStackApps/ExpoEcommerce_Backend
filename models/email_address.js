const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email_type: String, // (personel,corporate)
    email_add: String,
    status: String,
    create_ts: Date,
    editedby: Number,
    edit_ts: Date,
    deleted: Number,
    deletedby: Number,
    // create_user: Number,
    create_user: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },
}, { timestamps: true })
module.exports = mongoose.model('email_address', schema)