const mongoose = require('mongoose');
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    desctiption: {
        type: String,
        require: true,
    },
    content: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    userName: String,
    userAvatar: String,
    }, {
      timestamps: true,  
});

const skatespotSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        enum: ['1', '2', '3', '4', '5'],
    },
    reviews: [reviewSchema],
    
});


// const skatespots = [
//     {id: 1, skatespot: 'Stairs'},
//     {id: 2, skatespot: 'Ledge'},
//     {id: 3, skatespot: 'Gap'},
// ]

// module.exports = {
//     getAll
//     // getOne, 
// };

// function getAll() {
//     return skatespots;
// }

// function getOne(id) {
//     id = parseInt(id);
//     return skatespots.find(skatespot => skatespot.id === id);
// }

module.exports = mongoose.model('Skatespots', skatespotSchema)