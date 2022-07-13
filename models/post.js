const mongoose = require('mongoose');
const date = require('date-and-time');
const now = new Date;
// console.log(date.format(now, 'YYYY/MM/DD HH:mm:ss'));

const postSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: false
    },
    Rating: {
        type: Number,
        default: 3
    },
    tags: {
        type: Array,
        required: false,
        default: ["book"]
    },
    countUser: {
        type: Number,
        default: 0
    },
    countBook: {
        type: Number,
    },
    UpdateTime: {
        type: Date,
        default: date.format(now, 'YYYY/MM/DD HH:mm:ss')
    }
});

module.exports = mongoose.model('Posts', postSchema);