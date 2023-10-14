const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim:true,
        },
        image: {
            type: String,
            required: true,
        },
        course: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        
    }, {
        timestamps: true
    } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Todo", todoSchema);