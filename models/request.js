const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        student_name: {
            type: String,
            required: true,
            trim:true,
        },
        course: {
            type: String,
            required: true,
        },
        student_surname: {
            type: String,
            required: true,
        },
        student_phone_number: {
            type: String,  
            required: true,
        },
        
    }, {
        timestamps: true
    } //Qachon yaratilganini aytadigan gandoncha
);

module.exports = mongoose.model("Request", requestSchema);