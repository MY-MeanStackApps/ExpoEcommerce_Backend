const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    salutation: String,
    email: String,
    password: String,
    firstname: String,
    middlename: String,
    lastname: String,
    mobile: Number,
    dob: Date,
    descreption: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,

}, { timestamps: true })
module.exports = mongoose.model('individual', schema)