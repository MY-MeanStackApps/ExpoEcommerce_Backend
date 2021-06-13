const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    parent: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
}, { timestamps: true })
module.exports = mongoose.model('category', schema)