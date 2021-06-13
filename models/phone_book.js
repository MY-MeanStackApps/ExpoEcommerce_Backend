const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    phone_type: String, //(mobile,landline,fax)
    entity_type: String, //(main,alternate)
    countery_code: String,
    isd_code: Number,
    area_code: Number,
    phone_number: String,
    estension: Number,
    status: String,
    create_ts: Date,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    // create_user: Number,
    create_user: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },
    individual: { type: mongoose.Schema.Types.ObjectId, ref: "individual" },
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },
}, { timestamps: true })
module.exports = mongoose.model('phonelock', schema)