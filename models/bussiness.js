const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    storename: String,
    descreption: String,
    gst_updt_type: String, //(exempt,provided)
    bus_entity_type: String,
    bus_ownership: String,
    bus_name: String,
    turnover_y1: Number,
    turnover_y1: Number,
    turnover_y1: Number,
    sell_othr_site: Boolean,
    sell_othr_site_dtl: String,
    bus_listing_status: String,
    bus_pause: String,
    bus_stop: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    city_id: Number,
    state_id: Number,
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },

}, { timestamps: true })
module.exports = mongoose.model('bussiness', schema)