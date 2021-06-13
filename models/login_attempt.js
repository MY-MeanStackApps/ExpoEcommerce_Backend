const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    source_type: String,
    ipaddress: String,
    client_type: String,
    username: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

}, { timestamps: true })
module.exports = mongoose.model('login_attemp', schema)