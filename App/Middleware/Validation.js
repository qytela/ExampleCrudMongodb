exports.validRequest = (req, res, next) => {
    const { judul, sinopsis, pengarang, harga, id_buku } = req.body;
    if (judul, sinopsis, pengarang, harga, id_buku) {
        if (isNaN(harga) || isNaN(id_buku)) {
            res.status(400).json({
                status: false,
                msg: 'Bad Request.'
            });
        }else{
            return next();
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'All fields cannot be null.'
        });
    }
}

exports.validDelete = (req, res, next) => {
    const { id_buku } = req.body;
    if (id_buku) {
        if (isNaN(id_buku)) {
            res.status(400).json({
                status: false,
                msg: 'Bad Request.'
            });
        }else{
            return next();
        }
    }else{
        res.status(400).json({
            status: false,
            msg: 'All fields cannot be null.'
        });
    }
}