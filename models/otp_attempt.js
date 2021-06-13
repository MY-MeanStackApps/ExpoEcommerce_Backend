const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    otp_entered: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    otp: { type: mongoose.Schema.Types.ObjectId, ref: "otp" },

}, { timestamps: true })
module.exports = mongoose.model('otpattemp', schema)