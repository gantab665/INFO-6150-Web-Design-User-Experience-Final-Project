const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: String,
    status: String,
    date: String,
    location: String,
    price: String,
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
