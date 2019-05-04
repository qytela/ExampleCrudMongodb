const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/tokobuku';

mongoose.connect(url, {
    useNewUrlParser: true
})
.then(() => console.log('Success to connect MongoDB'))
.catch(err => {
    console.log('Failed to connect MongoDB');
    process.exit();
});