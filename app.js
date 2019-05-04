const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const bukuController = require('./App/Controllers/BukuController');
const validation = require('./App/Middleware/Validation');
const mongodb = require('./Config/Database.config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/buku', bukuController.allBuku);
app.post('/buku', validation.validRequest, bukuController.createBuku);
app.post('/buku/update', validation.validRequest, bukuController.updateBuku);
app.delete('/buku/delete', validation.validDelete, bukuController.deleteBuku);

app.listen(8080, () => {
    console.log('Running on *:8080');
});