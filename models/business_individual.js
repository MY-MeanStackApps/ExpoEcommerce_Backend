const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username: String,
    phone: String,
    email: String,
    relation_type: String,
    job_title: String,
    job_function: String,
    department: String,
    status: String,
    create_ts: Date,
    edit_ts: Date,
    create_user: Number,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },

}, { timestamps: true })
module.exports = mongoose.model('bussiness_individual', schema)