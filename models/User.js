const mongoose = require('mongoose');
const Schema = mongoose.schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    data: {
        type: Data,
        default: Date.now()
    },

});

module.exports = User = mongoose.model('users', UserSchema);