const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    Doc_type: String, // (incorporation cert,addhar,user agrement,cancelled check)
    description: String,
    document_name: String,
    document_id: String, //(eg. aadhar numbar,pan number)
    file_type: String, //(pdf,word)
    original_file_name: String,
    encrypted_file_name: String,
    path_location: String,
    url: String,
    start_ts: String,
    end_ts: String,
    status: String,
    create_ts: Date,
    create_user: Number,
    edit_ts: Date,
    editedby: Number,
    deleted: Number,
    deletedby: Number,
    bussiness: { type: mongoose.Schema.Types.ObjectId, ref: "bussiness" },

}, { timestamps: true })
module.exports = mongoose.model('media', schema)