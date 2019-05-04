const mongoose = require('mongoose');

const BukuSchema = new mongoose.Schema({
    judul: { type: String },
    sinopsis: { type: String },
    pengarang: { type: String },
    harga: { type: Number },
    id_buku: { type: Number }
});

module.exports = mongoose.model('buku', BukuSchema, 'buku');