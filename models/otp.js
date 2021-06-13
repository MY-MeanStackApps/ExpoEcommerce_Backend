const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    otp_type: String, //(login,phone change,registration)
    otp_medium_type: String, // (sms,email)
    otp: String,
    // otp_expire_ts: Datetime,
    otp_expire_ts: String,
    phone_book_id: Number,
    email_add_id: Number,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    // login_attemp: { type: mongoose.Schema.Types.ObjectId, ref: "login_attemp" },

}, { timestamps: true })
module.exports = mongoose.model('otp', schema)