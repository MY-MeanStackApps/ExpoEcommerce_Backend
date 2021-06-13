const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    ind_id: Number,
    username: String,
    parent_user: Number,
    descreption: String,
    password: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },

}, { timestamps: true })
module.exports = mongoose.model('user', schema)