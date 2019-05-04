const Buku = require('../Models/BukuModel');

exports.allBuku = (req, res) => {
    Buku.find((err, rows) => {
        res.json({
            status: true,
            data: rows
        });
    });
}

exports.createBuku = async (req, res) => {
    const { judul, sinopsis, pengarang, harga, id_buku } = req.body;
    const checkIdBuku = await Buku.find({ id_buku: id_buku });
    if (checkIdBuku.length > 0) {
        const createBuku = await Buku.create({ judul: judul, sinopsis: sinopsis, pengarang: pengarang, harga: harga, id_buku: id_buku });
        if (createBuku) {
            res.json({
                status: true,
                msg: 'Berhasil menambah Buku.'
            });
        }else{
            res.status(400).json({
                status: false,
                msg: 'Gagal menambah Buku.'
            });
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'ID Buku ' + id_buku + ' tidak di temukan.'
        });
    }
}

exports.updateBuku = async (req, res) => {
    const { judul, sinopsis, pengarang, harga, id_buku } = req.body;
    const checkIdBuku = await Buku.find({ id_buku: id_buku });
    if (checkIdBuku.length > 0) {
        const updateBuku = await Buku.updateOne({ id_buku: id_buku }, { judul: judul, sinopsis: sinopsis, pengarang: pengarang, harga: harga });
        if (updateBuku) {
            res.json({
                status: true,
                msg: 'Berhasil mengubah Buku.',
                data: {
                    id_buku: id_buku
                }
            });
        }else{
            res.status(400).json({
                status: false,
                msg: "Gagal mengubah Buku."
            });
        }
    }else{
        res.status(400).json({
            status: Float32Array,
            msg: 'ID Buku ' + id_buku + ' tidak di temukan.'
        });
    }
}

exports.deleteBuku = async (req, res) => {
    const { id_buku } = req.body;
    if (id_buku) {
        const checkIdBuku = await Buku.find({ id_buku: id_buku });
        if (checkIdBuku.length > 0) {
            const deleteBuku = await Buku.remove({ id_buku: id_buku });
            if (deleteBuku) {
                res.json({
                    status: true,
                    msg: 'Berhasil menghapus Buku.',
                    data: {
                        id_buku: id_buku
                    }
                });
            }else{
                res.status(400).json({
                    status: false,
                    msg: 'Gagal menghapus Buku.',
                });
            }
        }else{
            res.status(400).json({
                status: false,
                msg: 'ID Buku ' + id_buku + ' tidak di temukan.'
            });
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'All fields cannot be null.'
        });
    }
}