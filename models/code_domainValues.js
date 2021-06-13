const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    value: String,
    code: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    codedomain: { type: mongoose.Schema.Types.ObjectId, ref: "codedomain" },
}, { timestamps: true })
module.exports = mongoose.model('codedomain_values', schema)