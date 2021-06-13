const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    start_ts: Datetime,
    end_ts: Datetime,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    login_attemp: { type: mongoose.Schema.Types.ObjectId, ref: "login_attemp" },

}, { timestamps: true })
module.exports = mongoose.model('user_session', schema)