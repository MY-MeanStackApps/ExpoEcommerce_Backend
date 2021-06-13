const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    address_type: String,
    add_line1: String,
    add_line2: String,
    zip_id: Number,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    // city_id: Number,
    // state_id: Number,
    // country_id: Number,
    city_id: String,
    state_id: String,
    country_id: String,
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },

}, { timestamps: true })
module.exports = mongoose.model('address', schema)